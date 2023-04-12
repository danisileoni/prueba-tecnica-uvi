import { useState } from "react";
import { uploadsfile, uploadsform } from "../firebase/config";
import { Toaster, toast } from "sonner";


export const FormContact = () => {

  const valueInitial = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    plan: ''
  }

  const [form, setForm] = useState(valueInitial);
  const [fileAd, setFileAd] = useState(null);
  const [sent, setSent] = useState(false)

  const {name, lastName, email, phone, plan} = form;

  const captureInputs = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]:value})
  }

  const handleFileChange = (event) => {
    setFileAd(event.target.files[0]);
  };

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      await uploadsfile(fileAd);
      await uploadsform(JSON.stringify(form));
      setForm({...valueInitial});
      setSent(true);
      toast.success('Enviado Correctamente!');
      
    } catch (error) {
      console.error(error);
      alert('fallo al subir el archivo, intente mas tarde');
    }
    // Aquí se puede agregar la lógica para enviar el formulario al servidor
  };

  return (
    <>
    <form id="form-contact" className="mb-5" onSubmit={handleSubmit}>
      <h2 className="text-white" id="contact-us">Contactanos</h2>

      <div className="class-inputs form-group col-md-5">
        <label htmlFor="name"></label>
        <input type="text" className="form-control" name="name" id="name" value={name} onChange={captureInputs} placeholder="Nombre" required />
      </div>

      <div className="class-inputs form-group col-md-5">
        <label htmlFor="lastName"></label>
        <input type="text" className="form-control" name="lastName" id="lastName" value={lastName} onChange={captureInputs} placeholder="Apellido" required />
      </div>

      <div className="class-inputs form-group col-md-5">
        <label htmlFor="email"></label>
        <input type="email" className="form-control" name="email" id="email" value={email} onChange={captureInputs} placeholder="Correo electrónico" required />
      </div>

      <div className="class-inputs form-group col-md-5">
        <label htmlFor="phone"></label>
        <input type="tel" className="form-control" name="phone" id="phone" value={phone} onChange={captureInputs} placeholder="Teléfono" required />
      </div>

      <div className="class-inputs form-group col-md-5">
        <label htmlFor="fileAd">Archivo adjunto</label>
        <input type="file" className="form-control" id="fileAd" name="fileAd" onChange={handleFileChange} required/>
        {/* <customfileinput id="fileAd" name="fileAd" onChange={handleArchivoChange} /> */}
      </div>

      <div className="class-inputs col-md-5">
        <label htmlFor="plan">Plan</label>
        <select className="form-control form-control-s" name="plan" id="plan" value={plan} onChange={captureInputs} required>
          <option value="">Seleccione un plan</option>
          <option value="plan1">Plan 1</option>
          <option value="plan2">Plan 2</option>
          <option value="plan3">Plan 3</option>
        </select>
      </div>
      <Toaster richColors/>
      <button className="btn btn-success col-md-5 mt-2 p-1 text-black" id="btn-send" type="submit" color="primary" disabled={sent}>Enviar</button>
    </form>
    </>
  );
};
