

interface UserAvatarProps {
    src: string;
    alt: string;
}

function UserAvatar({ src, alt }: UserAvatarProps) {

    return (
        <div className="flex justify-center items-center self-start
        rounded-full max-w-[10%] aspect-square
        bg-gray-200"
        >
            <img
                className="w-[80%]"
                src={ src }
                alt={ alt }
            />
        </div>
    );
}

export default UserAvatar;