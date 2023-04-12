import { PlansViwe } from "./Plans/PlansViwe"

export const Plans = () => {
  return (
    <>
     <h1 className="text-white d-flex justify-content-center" id="plans-h1">Planes</h1>
     <div className="div-plans" >
      <PlansViwe 
        title={'Example 1'} 
        characteristics={['example', 'example', 'example', 'example']}
        characteristicsNull={['example null', 'example null', 'example null', 'example null',]}
        price={2000}
        div={1}
      />

      <PlansViwe
        title={'Example 2'} 
        characteristics={['example', 'example', 'example', 'example', 'example', 'example']}
        characteristicsNull={['example null', 'example null']}
        price={5000}
        div={2}
      />

      <PlansViwe
        title={'Example 3'} 
        characteristics={['example', 'example', 'example', 'example', 'example', 'example', 'example', 'example']}
        price={15000}
        div={3}
      />
     </div>
    </>
  )
}