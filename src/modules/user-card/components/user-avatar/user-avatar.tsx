

interface UserAvatarProps {
    src: string;
    alt: string;
}

function UserAvatar({ src, alt }: UserAvatarProps) {

    return (
        <div className="flex justify-center items-center self-start
        rounded-full max-w-[10%] aspect-square
        bg-gray-100
        max-md:max-w-full max-md:w-[90%]"
        >
            <img
                className="w-full aspect-square rounded-full text-center"
                src={ src }
                alt={ alt }
            />
        </div>
    );
}

export default UserAvatar;