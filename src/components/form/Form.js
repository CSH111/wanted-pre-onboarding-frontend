const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">email</label>
      <input id="email" type="email" />
      <label htmlFor="pw">password</label>
      <input id="pw" type="password" />
      <button type="submit">제출</button>
    </form>
  );
};

export default Form;
