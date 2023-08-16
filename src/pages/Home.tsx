import React, { useState } from 'react';

const Home: React.FC = () => {

  // Defining state for prompt and image inputs from the form
  const [prompt, setPrompt] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  // Functions to handle updating state variables
  // event listener of type React.ChangeEvent
  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Here you can use the 'prompt' and 'image' state variables for further processing.
    console.log('Prompt:', prompt);
    console.log('Image:', image);

    // Perform other actions like sending data to a server, etc.
  };

  const bannerStyle = {
    backgroundImage: "url('images/img-10.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  };

  return (
    <>
      <div className="banner" style={bannerStyle}>
        <div className="overlay"></div>
      </div>

      <div className="main bg-gray-50 h-70vh flex flex-col items-center justify-center">
        <section className="app text-center p-8 bg-white rounded-lg shadow-lg mt-8 mb-10">
          <h1 className="head_text text-4xl font-bold mb-4">
            Discover & Embrace
            <br className="max-md:hidden" />
            <span className="orange_gradient text-orange-500 text-6xl"> Your Ultimate Style</span>
          </h1>
          <p className="desc text-gray-700">
            AI-Styler is an open-source AI tool that allows users to view themselves with different hairstyles, clothes, and accessories.
          </p>

          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prompt">
                Prompt
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="prompt"
                type="text"
                placeholder="Your Prompt"
                value={prompt}
                onChange={handlePromptChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Create Style
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Home;
