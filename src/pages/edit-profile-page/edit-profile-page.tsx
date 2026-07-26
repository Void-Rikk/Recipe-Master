import { Link, useParams } from "react-router";
import { MoveLeft } from "lucide-react";
import { EditProfileForm } from "../../modules/edit-profile-form";


function EditProfilePage() {
    const { userId } = useParams();

    return (
        <div className="flex flex-col gap-4 p-4 min-w-[40%] lg:max-w-[40%] max-md:w-full">
            <Link
                to={`/user/${userId}`}
                className="flex items-center gap-4 self-start"
            >
                <MoveLeft />
                Назад
            </Link>
            <section
                className="p-6 rounded-2xl
                border border-gray-300
                shadow-md shadow-gray-300
                max-md:shadow-none max-md:p-0 max-md:border-none"
            >
                <h1 className="text-xl pb-4">Редактирование профиля</h1>
                <EditProfileForm
                    userId={ Number(userId) }
                />
            </section>
        </div>
    );
}

export default EditProfilePage;