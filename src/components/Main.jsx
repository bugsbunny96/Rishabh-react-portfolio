import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src="https://lh3.googleusercontent.com/jpmBSTJziVNjW7riJ5tZ219r74FG6dwOp1QRlC-SXLc7MPzDx1bKFk2iL1nVyfLpjndV7m0Da10dMsBhUahroUhgpX06COu1neyZLbryV3YHqa9zi1emcIDmlbA3Ma8OsVll2IAMzovIyCW6Hgv3HoGkJVTGhD7m6U0T7WqrywFL4H5NgsbgkhxigGtFL3M2DcY6iMEfdN6JINSLDvkdHsrDI3IFgnFN1DpXX9A9bSao33HbSWiJbzZ2kurTfv-Os4oVRbJ6bxRiM6QjmY1LEdf-5qS45HLhGlhv9m2Q8KPzMI1jddrOvgyaljj4i5DUeha_qAh_ew2O73yI46557MBGrN0CtvdvTrprmdnWhsCoufJ573HiR0_QJo3ETjYkmSd8fA59sjVa5TcVCEVewo0eXbcSjlIpSgm6G7WGBGwmyTABp-SPpr5qE1RNd9d7TfH-W45lxEnlMOT6s8W4_lj6XzheaRJmtVKeAeI_DLo8QYZSivZ4_iaiU28srzPzMqUn21NL_7ZQglML-jjMq5gs-B5OMubuuOSDyfT4so1vrknqXvDIgQSaAEqbhd19Qrh0Guk1X0zeA2m4sg_BVcuRLrkPBWoe8EPnwDf38Hvs0qkfBRBIL7T5MUQiK-wgrbQ1r9EjT0GeadkabUJSmhzhpAyM15CB7V5E5RHTnULT46oQbNMZ64N8zULeZN5ykFdhvjlcfcC9YcJb9FJPsEnTYCUdlPW_jxaOvb3UFaLQkODoLLp5qP24L8rYJigtdVXf_HlberLTM-wU9myVKEpikAIi4KvioG4WtzGv_KdNQT4RmFv3nKfpZSM8ID1Z0g6PeNQLKkCCMhi8fqOhuBo-swcMwhbX554ViMGWN9n4oc0cJQ42v9LG5pylB_nRcf2J_7oSXjAIiNCvlOlr40aRXIQyNJSDzZAisfmh7ZqpJIaQIdHq5hFzgZHZFHrpbQKFyC8wySKdvN4zu9zzYcRDvnCRJg1zYvHXUK6X0gfQGy-uFeCetY69RA=w1342-h1006-no?authuser=0" alt="/" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Rishabh</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer', // Types 'One'
                                2000, // Waits 1s
                                'Coder', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Tech Enthusiast',
                                2000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaFacebookF className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
