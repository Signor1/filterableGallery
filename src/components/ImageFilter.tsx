import { useState } from "react"
import Button from "./Button";
import { filterableData } from "../data/FilterableData";
import { Image } from "./Image";
import { Text } from "./Text";


const ImageFilter = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all')

    const buttonCaptions = ['all', 'nature', 'cars', 'people'];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter)
    }
    return (
        <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5">
            <div className="flex w-full md:justify-center items-start md:gap-6 gap-3 flex-wrap">
                {
                    buttonCaptions.map((filter) => (
                        <Button key={filter} onClick={() => handleFilterClick(filter)} type="button" className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${activeFilter === filter ? "bg-purple-600" : " "}`}>
                            {filter === 'all' ? 'Show all' : filter}
                        </Button>
                    ))
                }
                {/* filtered cards display */}
                <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
                    {
                        filterableData.map((item, index) => (

                            <div key={index} className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 border border-gray-600 ${activeFilter === 'all' || activeFilter === item.name ? 'block' : "hidden"}`}>
                                <Image className="rounded-t-lg w-full h-[200px] overflow-hidden" image={item.src} alt={item.name} objectCover="object-cover" />
                                <div className="p-5">
                                    <Text as="h5" className="mb-2 text-2xl font-bold tracking-tight text-white">
                                        {item.title}
                                    </Text>
                                    <Text as="p" className="mb-3 font-normal text-gray-400">
                                        {item.text}
                                    </Text>
                                </div>
                            </div>

                        ))
                    }
                </main>

            </div>
        </section>
    )
}

export default ImageFilter