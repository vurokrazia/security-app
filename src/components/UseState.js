import React from 'react';
import Loading from './Loading';

export default function UseState({ name }) {
  const [error, setError] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log('starting');
    if (!!loading)
      setTimeout(() => {
        console.log('working');
        setLoading(false);

        console.log('okay');
        //setError(!error);
      }, 3000);
    console.log('ending');
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escriba el código de seguridad.</p>
      {error && <p>El codigo es incorrecto</p>}
      {loading && <Loading />}
      <input type='text' placeholder='código de seguridad' />
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        Comprobar
      </button>
    </div>
  );
}
