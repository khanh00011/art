import { BasicFormSearch } from "@/components/BasicFormSearch/BasicFormSearch"
import Button from "@/components/Button"
import iconClose from "../../../../../public/icons/Close-1.svg"
interface EditProfileProps {
    handleClose?: () => void;
    handleSave?: () => void;
}
export const EditProfile = ({ handleClose, handleSave }: EditProfileProps) => {
    return (
        <div className="max-w-[755px]  p-12 lg:m-6 sm:p-4 rounded-3xl mx-auto bg-black-100 relative z-50">
            <form className="" action="#">
                <div className="relative mb-6 md:mb-4">
                    <h1 className="font-medium text-center text-4xl leading-[44px] text-white-100 tracking-tight  md:text-2xl sm:py-2">Edit Profile</h1>
                    <div className="absolute right-0 top-[50%] translate-y-[-50%]" onClick={handleClose}>
                        <Button
                            iconSvg={iconClose}
                            size="Small"
                            state="Default"
                            style="Outline"
                        />
                    </div>
                </div>
                <div className="mb-6 md:mb-4 pt-6 md:pt-4 border-t border-white-10">
                    <label htmlFor="" className="block text-white-80 text-base font-medium mb-2">Display name</label>
                    <BasicFormSearch
                        placeholder="Ekaterina Ippolitova"
                        valueDedault="Ekaterina Ippolitova"
                    />
                </div>
                <div className="mb-6 md:mb-4">
                    <label htmlFor="" className="block text-white-80 text-base font-medium mb-2">Email address</label>
                    <BasicFormSearch
                        placeholder="Ekaterina Ippolitova"
                        valueDedault="ekaterina.ippolitova13@gmail.com"
                    />
                </div>
                <div className="mb-6 md:mb-4">
                    <label htmlFor="" className="block text-white-80 text-base font-medium mb-2">Bio</label>
                    <textarea
                        rows={3}
                        className="rounded-3xl px-4 resize-none input-basic"
                        placeholder="Enter your message"
                        defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type."
                    >

                    </textarea>
                </div>
                <div className="mb-6 md:mb-4">
                    <label htmlFor="" className="block text-white-80 text-base font-medium mb-2">Twitter handle</label>
                    <BasicFormSearch
                        placeholder="Ekaterina Ippolitova"
                        valueDedault="@ekaterina_ippolitova"
                    />
                </div>
                <div className="mb-6 md:mb-4">
                    <label htmlFor="" className="block text-white-80 text-base font-medium mb-2">Website</label>
                    <BasicFormSearch
                        placeholder="Ekaterina Ippolitova"
                        valueDedault="https://theart.exchange"
                    />
                </div>
                <button type="submit" className=" block w-full text-center leading-[40px] text-white-100 text-base font-medium bg-primary-100 rounded-full" onClick={handleSave}>Save</button>
            </form>
        </div>
    )
}