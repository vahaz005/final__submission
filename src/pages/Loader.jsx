// Loader.js
import React, { useEffect , useState} from 'react';
import './loader.css';

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
      loader.classList.remove('invisible');
      loader.classList.add('opacity-100');
    }, 100); 
  }, []);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 95 ? 100 : prevProgress + 5));
      console.log(progress)
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='loader__main'> <div className='loader' >
    <img style={{ width: `${progress}%` }  } src="./public/assets (2)/loading.svg" alt="" />
        </div></section>
   
  );
};

export default Loader;
