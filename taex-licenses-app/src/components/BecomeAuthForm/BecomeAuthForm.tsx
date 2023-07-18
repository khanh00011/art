import { BasicFormSearch } from "../BasicFormSearch/BasicFormSearch";

export const BecomeAuthForm = () => {
  return (
    <form action="">
      <div className="pb-6">
        <label className="block text-white-80 pb-2" htmlFor="name">
          Name
        </label>
        <BasicFormSearch placeholder="Enter your name" id="name"/>
      </div>
      <div className="pb-6">
        <label className="block text-white-80 pb-2" htmlFor="email">
          Email address
        </label>
        <BasicFormSearch placeholder="Enter your email address" id="email"/>
      </div>
      <div className="pb-6">
        <label className="block text-white-80 pb-2" htmlFor="phone">
          Phone number
        </label>
        <BasicFormSearch placeholder="Enter your phone number" id="phone"/>
      </div>
      <div className="pb-6">
        <label className="block text-white-80 pb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="rounded-3xl px-4 resize-none input-basic"
          rows={4}
          placeholder="Enter your message"
          id="message"
        ></textarea>
      </div>
    </form>
  );
};
