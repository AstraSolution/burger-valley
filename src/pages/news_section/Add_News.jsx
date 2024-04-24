import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Add_News = () => {
    const { register, handleSubmit, errors } = useForm();
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [tags, setTags] = useState([]);








    // tags information
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newTag = e.target.value.trim();
            if (newTag !== '') {
                setTags([...tags, newTag]);
                e.target.value = '';
            }
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags?.filter((_, index) => index !== indexToRemove));
    };



    // image irformation

    const handleImageChange = (files) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];

        for (let i = 0; i < files.length; i++) {
            newImages.push(URL.createObjectURL(files[i]));
            newFileNames.push(files[i].name);
        }

        setImages(newImages);
        setFileNames(newFileNames);
    };

    const handleRemoveImage = (index) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];
        newImages.splice(index, 1);
        newFileNames.splice(index, 1);
        setImages(newImages);
        setFileNames(newFileNames);
    };




    const onSubmit = (data) => {
        const currentTime = new Date();
        data.publish_date = currentTime.toLocaleString();
        data.images = images;
        data.tags = tags;
        console.log(data);

        // Add code to send form data to backend or perform other actions
    };


    return (

        <div className="container mx-auto md:mt-4 px-1 bg-black ">
            <h1 className='py-2 text-[#FF9D00] font-oswald lg:text-3xl md:text-xl text-lg font-bold px-4 '> Add News Page </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" shadow-md rounded px-4 pt-4 pb-8 mb-4">

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    {/* title */}
                    <div className="mb-4">
                        <label className="block md:text-2xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                            id="title"
                            type="text"
                            placeholder="Title"
                            required
                            {...register("title")}
                        />
                    </div>

                    {/* category */}
                    <div className="mb-4">
                        <label className="block md:text-2xl text-white  text-sm font-bold mb-2">
                            Category
                        </label>
                        <select className="w-full px-4 py-2  text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " id="category" {...register("category")} required  >
                            <option value="" className='text-gray-200'> Category Selected </option>
                            <option value="burger">Burger</option>
                            <option value="snack">Snack </option>
                            <option value="beverage">Beverage </option>
                        </select>
                    </div>


                </div>


                {/* tag */}
                <div>
                    <label className="block md:text-2xl text-gray-200 text-sm font-bold mb-2" htmlFor="tags">
                        Tags (Enter separated)
                    </label>
                    <div className="flex flex-wrap">
                        {tags?.map((tag, index) => (
                            <div key={index} className="flex items-center bg-gray-900 text-[#FF9D00]  mb-1 rounded-lg px-3 py-1 mr-2 mt-1">
                                {tag}
                                <button type="button" className="ml-2 " onClick={() => removeTag(index)}>
                                    &#10005;
                                </button>
                            </div>
                        ))}
                        <input
                            className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                            id="tags"
                            type="text"
                            placeholder="Tags Names"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>

                <div className="mb-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4 ">

                    {/* Image input */}
                    <div className="mt-6">
                        <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 items-center mt-2">
                            {images.map((image, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img
                                        src={image}
                                        alt={fileNames[index]}
                                        className="max-h-40 w-auto"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-[#FF9D00] text-white p-1 rounded-full"
                                    >
                                        <MdDeleteOutline />
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* Upload button */}
                        <label className="block md:text-2xl text-white  text-sm font-bold mb-2">Up Load Image</label>

                        <div
                            onClick={() => document.querySelector("#image").click()}
                            className="cursor-pointer mt-4 p-4 border bg-gray-800 rounded-md flex items-center justify-center"
                        >
                            <LuUpload className="text-3xl text-[#FF9D00] mx-auto"></LuUpload>{" "}
                            <p className="ml-2"></p>{" "}
                        </div>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            className="hidden"
                            multiple
                            onChange={(e) => handleImageChange(e.target.files)}
                        />
                    </div>


                </div>

                {/* description */}
                <div className="mb-4">
                    <label className="block md:text-2xl text-white  text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="w-full h-auto min-h-60  px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
                        id="description"
                        placeholder="Description"
                        required
                        {...register("description")}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-[#FF9D00] hover:bg-[#FF9D00]-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Add_News;
