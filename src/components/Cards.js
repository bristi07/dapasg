import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Fetch from "../hooks/Fetch";
import ReadMoreReadLess from "./ReadMoreReadLess";

export default function CardComponent() {



    const { data, loading, error } = Fetch(`https://fakestoreapi.com/products`);
    // console.log(data);
    // const posts = [
    //     {
    //         title: "Grid 1",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 2",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 3",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: "Grid 3",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 2",
    //     img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 1",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    // ];

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [type, setType] = useState("All");


    const handleTypeChange = (e) => {
        setType(e.target.value);
        console.log(type)
    }

    const handleClick = () => {
        setOpenModal(!openModal);
        //console.log(openModal);



    }

    const filtercheck = (e) => {

        if (type === "All") {
            return true;
        }

        if (type === e.category) {
            return true;
        }


    }
    return (
        <>


            <div className=" flex justify-end my-4 mx-10 border-spacing-3 border-solid  ">
                <select style={{ width: "150px" }}
                    onChange={(e) => handleTypeChange(e)}
                    type="text"
                    className="form-control border-solid"
                    placeholder="Filter by type"
                >
                    <option className=" rounded-md outline-none border-black border-2 " value="" disabled="true" selected>Select Category</option>
                    <option className="" value="All">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>

                </select>
            </div>
            <div className="grid gap-20 mt-9 m-10 lg:grid-cols-3  mx-10">
                {data.filter((e) => filtercheck(e)).map((items, key) => (
                    <div className="w-full rounded-2xl shadow-2xl lg:max-w-sm p-8" key={key}>
                        <img className=" max-h-48 min-h-fit object-contain w-full h-full rounded-2xl" src={items.image} alt="image" />
                        <div className="flex justify-end -mt-2 px-2">
                            <button class="bg-slate-50 font-roboto text-black font-bold py-1 mt-10 capitalize px-4 border-none rounded text-[8px] shadow-xl cursor-default">
                                {items.category}
                            </button>
                        </div>
                        <div className="p-4">
                            <h4 className="text-md font-roboto font-semibold text-blue-600 py-4">

                                {items.title}
                            </h4>
                            <ReadMoreReadLess limit={150}>

                                {items.description}

                            </ReadMoreReadLess>


                        </div>
                    </div>
                ))}

            </div>
            <div className=" sticky bottom-6  flex justify-end px-4">
                <button class="bg-black hover: text-white font-bold py-2 px-4 border rounded-lg" onClick={handleClick}>
                    ANALYZE
                </button>
            </div >
            {openModal && <Modal setOpen={setOpenModal} />}

        </>
    );
}