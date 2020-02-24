import React, { useState } from 'react';

interface IProps {
  addTaskToOrganizer: (t: string) => void;
}

export const Form = ({ addTaskToOrganizer }: IProps) => {
  const [ text, setText ] = useState('');
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);
  const clickToBtn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim().length >= 5) {
      addTaskToOrganizer(text);
      setText('');
    } else {
      alert('Слишком маленькое описание! Попробуйте еще раз');
      setText('');
    }

  };

  return (
    <div className="container wrapper-form">
      <form className="form" onSubmit={clickToBtn}>
        <label htmlFor="task"><i className="material-icons">add</i></label>
        <input
          id="task"
          type="text"
          className="validate"
            // @ts-ignore
          minLength="5"
          value={text}
          placeholder="task description"
          onChange={changeInput}
        />
      </form>
    </div>
  )
};