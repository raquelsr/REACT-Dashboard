import * as React from 'react';

type SectionTitle = {
    title: string;
}

export const SectionTitle: React.FC<SectionTitle> = ({ title }) => {
    return (
        <div className="mx-8 mt-12 mb-12 text-white bg-mt-orange">
            <h1 className='m-4 text-xl font-bold text-center text-white'>
                {title}
            </h1>
        </div>
    );
};


