import Button from "../../../../shared/components/button/button.tsx";


function EditProfileFormControls() {

    return (
        <div
            className="self-end flex gap-4"
        >
            <Button
                className="text-gray-900 bg-transparent
                border border-gray-300
                shadow shadow-gray-300
                hover:shadow-md hover:translate-y-[-1px] hover:cursor-pointer
                transition-all"
            >
                Reset
            </Button>
            <Button
                className="shadow shadow-gray-600
                hover:shadow-md hover:translate-y-[-1px] hover:cursor-pointer
                transition-all"
            >
                Save Changes
            </Button>
        </div>
    );
}

export default EditProfileFormControls;