import TextArea from "../../../../shared/components/textarea/textarea.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import {type SubmitEventHandler, useState} from "react";


function CommentForm() {
    const [comment, setComment] = useState<string>("");

    const handleSendComment: SubmitEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="flex items-center gap-4 pl-[5%]"
            onSubmit={ handleSendComment }
        >
            <TextArea
                placeholder="Write a comment"
                className="p-2 rounded-xl text-white bg-gray-900
                    shadow shadow-gray-600
                    resize-none grow-1 placeholder:text-gray-300"
                value={ comment }
                onChange={ (e) => setComment(e.target.value) }
            ></TextArea>
            <Button className="cursor-pointer transition-all
                shadow shadow-gray-600 h-[80%]
                hover:translate-y-[-2px] hover:shadow-md">
                Send
            </Button>
        </form>
    );
}

export default CommentForm;