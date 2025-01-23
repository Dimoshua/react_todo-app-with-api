import React from 'react';
import cn from 'classnames';

type Props = {
  errorMessage: string | null;
  clearErrorMessage: () => void;
};

export const Error: React.FC<Props> = ({ errorMessage, clearErrorMessage }) => (
  <div
    data-cy="ErrorNotification"
    className={cn('notification is-danger is-light has-text-weight-normal', {
      hidden: !errorMessage,
    })}
  >
    <button
      data-cy="HideErrorButton"
      type="button"
      className="delete"
      onClick={clearErrorMessage}
    />
    {errorMessage}
  </div>
);
