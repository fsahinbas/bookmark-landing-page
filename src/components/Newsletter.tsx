import React, { FormEvent, useState } from "react";

const Newsletter = () => {
  const [mail, setMail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [hasAnyErr, setHasAnyErr] = useState(false);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setMail(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(mail)) {
      setIsValid(true);
      setHasAnyErr(false);
    } else {
      setIsValid(false);
      setHasAnyErr(true);
    }

    if (mail.length === 0) setHasAnyErr(true);
    else setHasAnyErr(false);
  };

  return (
    <section className="mt-32 px-8 pt-14 pb-10 bg-[var(--soft-blue)]">
      <div className="lg:w-[442px] lg:mx-auto">
        <p className="text-xs tracking-[4.62px] text-center leading-10 text-white">
          35,000+ ALREADY JOINED
        </p>
        <h2 className="text-2xl text-center mb-8 text-white">
          Stay up-to-date with what we’re doing
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row lg:gap-4 lg:items-start"
        >
          <div className="flex flex-col">
            <input
              type="text"
              className={`w-full rounded-md px-5 py-[10px] text-[var(--dark-blue)] text-sm leading-7 tracking-[.25px] outline-none ${
                hasAnyErr ? "border-2 border-[var(--soft-red)]" : "border-none"
              } lg:w-[300px]`}
              onChange={handleChange}
            />
            {hasAnyErr && (
              <span className="bg-[var(--soft-red)] text-white text-[10px] italic py-2 px-3 rounded-bl-md rounded-br-md -mt-1">
                {mail.length === 0
                  ? "Please, enter your e-mail address"
                  : !isValid
                  ? "Whoops, make sure it’s an email"
                  : ""}
              </span>
            )}
          </div>
          <button className="bg-[var(--soft-red)] border-[1px] border-[var(--soft-red)] rounded-md px-6 py-[10px] text-white text-sm leading-7 font-medium shadow-md mt-8 lg:mt-0 w-full tracking-[0.25px] outline-none hover:border-[var(--soft-red)] hover:bg-white hover:text-[var(--soft-red)] transition-all duration-300 lg:w-[126px]">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
