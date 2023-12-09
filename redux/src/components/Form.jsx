export const Form = ({ label, onSubmit, value, onChange, error }) => {;
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <h1 className="text-center">{label}</h1>
      <input
        type="text"
        className="border border-black p-2"
        name="title"
        defaultValue={value.title}
        onChange={onChange}
        placeholder="title"
      />
      {error?.message && <div className="text-red-500">{error?.message}</div>}
      <textarea
        className="border border-black resize-none h-[55vh] p-1"
        name="text"
        defaultValue={value.text}
        onChange={onChange}
        placeholder="text"
      />
      <button className="border p-1 mx-auto border-black rounded-sm bg-sky-300 my-2">
        Submit
      </button>
    </form>
  );
};
