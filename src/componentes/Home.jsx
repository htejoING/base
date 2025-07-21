// src/components/Home.jsx
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
// ✅ IMPORTA los ficheros (relative path desde /components)
import slide1 from "../assets/img1.jpg";
import slide2 from "../assets/img2.jpg";
import slide3 from "../assets/img3.jpg";
import slide4 from "../assets/img4.jpg";
export default function Home() {
  return (
    <>
      <Container className="my-4">
        <Carousel
          fade
          style={{ height: "400px", maxHeight: "400px" }} /* ← alto fijo */
        >
          {[slide1, slide2, slide3, slide4].map((src, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={src}
                alt={`Slide ${i + 1}`}
                style={{
                  height: "400px" /* ← coincide con carrusel */,
                  objectFit: "cover" /* recorta sin deformar    */,
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container className="my-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet ea sequi? Labore aliquam ea tempora suscipit voluptatibus cumque, qui iusto fugiat quas sunt autem iure. Ratione deleniti excepturi illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, dignissimos? Cumque itaque vel quas, quod nemo impedit veniam ad, dolores, dolorum ratione molestias nobis alias ducimus rerum aut aliquam odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci numquam eius quas, similique quidem amet aut repellendus quam necessitatibus asperiores voluptatum quaerat ratione natus? Quis, beatae molestias? Inventore, aliquid?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ex praesentium ipsa deleniti ab excepturi architecto dicta obcaecati, eius tempore cum repudiandae perspiciatis debitis iusto nemo, totam aperiam. Molestias, non?</p>
      </Container>
    </>
  );
}
