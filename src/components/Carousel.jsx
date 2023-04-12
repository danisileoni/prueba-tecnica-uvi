import { useState } from "react";
import styled from 'styled-components';
import pathImg from '../assets/imgs/recomendated-1.jpg'
import pathImg1 from '../assets/imgs/recomendated-2.jpg'
import pathImg2 from '../assets/imgs/recomendated-3.jpg'

const CarouselImg = styled.img`
max-width: 700px;
width: 100%
height: auto;
opacity: 0;
transition: 1s;
&.loaded {
  opacity: 1;
}
`;
const CarouselButtonContainer = styled.div`
display:flex;
align-items: center;
margin:top 15px;
}
`;
const CarouseButton = styled.button`
color: black;
background-color: #bd72fd;
padding: 8px;
margin: 0 5px;
width: 50px;
height: 50px;
border-radius: 50%;
border: none;
}
`;

export const Carousel = () => {
  const images = [pathImg, pathImg1, pathImg2];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? condition ? selectedIndex + 1 : 0 
                                           : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 800)
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, images);
  }


  return (
    <>
     <h1 className="text-white text-center">Recomendaciones</h1>
      <CarouselButtonContainer className="justify-content-center">
        <CarouseButton onClick={previous}>{'⟨'}</CarouseButton>
        <CarouselImg src={selectedImage} alt="recomendated" className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)}/>
        <CarouseButton onClick={next}><b>{'⟩'}</b></CarouseButton>
      </CarouselButtonContainer>
    </>
  )
}