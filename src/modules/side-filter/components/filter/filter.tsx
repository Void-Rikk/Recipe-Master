import { RadioGroup, RadioItem } from "../../../../shared/components/radio/radio.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import { useState } from "react";


function Filter() {
    const [filterValue, setFilterValue] = useState<string>("default");

    const handleFilterChange = (value: string) => {
        setFilterValue(value);
    }

    return (
        <>
            <RadioGroup
                className="flex flex-col gap-1"
                onValueChange={ (value) => handleFilterChange(value) }
                value={ filterValue }
            >
                <RadioItem value={"Salads"} id={'salads'} />
                <RadioItem value={"Snacks"} id={'snacks'} />
                <RadioItem value={"Mains"} id={'mains'} />
            </RadioGroup>
            <Button
                className="w-20 transition-all hover:translate-y-[-1px] hover:bg-gray-900 hover:cursor-pointer"
                onClick={ () => setFilterValue("default")}
            >
                Reset
            </Button>
        </>
    );
}

export default Filter;