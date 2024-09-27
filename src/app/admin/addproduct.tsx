"use client";

import axios from "axios";
import React, { useState } from "react";

const Offer = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // const [email, setEmail] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  const [image, setImage] = useState<File | null>(null); // Use File type for the image

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submit

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    // formData.append("email", email);
    // formData.append("city", city);
    // formData.append("state", state);
    // formData.append("zip", zip);

    if (image) {
      formData.append("image", image); // Add the image to FormData
    }

    axios
      .post("http://localhost:2000/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the correct header
        },
      })
      .then((response: any) => {
        console.log(response.data.data);
        window.location.replace("http://localhost:3000");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]); // Set the selected image file
    }
  };

  //   <Flex>
  // {ProductData.map((item: any, index: any) => (
  //   <GalleryCard
  //     key={index}
  //     image={item.image}
  //     name={item.name}
  //     price={item.price}
  //   />
  // ))}
  // </Flex>

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            name={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {/* <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> */}
        {/* <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div> */}
        {/* <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div> */}
        {/* <div>
          <label>Zip:</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div> */}
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Offer;
