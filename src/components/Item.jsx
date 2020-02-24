import React from 'react';

export const Item = ({ text, id, done, index, removeTask, doneTask}) => {
  let classes = "default";
  let btnDone = "material-icons deep-purple-text";
  let btnRemove = "material-icons deep-purple-text icon-remove";
  if (done) {
    classes += " checked";
    btnDone = "material-icons light-green-text";
    btnRemove = "material-icons red-text icon-remove"
  }
  const onRemove = () => removeTask(id);
  const onToggleDone = () => doneTask(id);
  return (
    <li className="item">
      <div>
        <span className="counter">{index}</span>
        <span className={classes}>{text}</span>
      </div>
      <div>
        <i
          className={btnDone}
          onClick={onToggleDone}
        >
          check
        </i>
        <i
          className={btnRemove}
          onClick={onRemove}
        >
          cancel
        </i>
      </div>
    </li>
  )
};