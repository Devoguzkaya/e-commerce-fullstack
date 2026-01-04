import React from 'react';
import { clientsData } from '../../data/homeData';

const Clients = () => {
    return (
        <section className="bg-[#FAFAFA] py-12 flex justify-center">
            <div className="w-[85%] flex justify-around items-center flex-wrap gap-4">
                {clientsData.map((client) => (
                    <div key={client.id} className="flex justify-center items-center">
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer object-contain grayscale hover:grayscale-0"
                            title={client.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
