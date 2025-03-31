import { useEffect, useState } from "react";

export const Child = () => {
  const [counter, setCounter] = useState(0);

  /*   useEffect(() => {
   console.log('child se ha renderizado')
  })
   */

  /*   useEffect(() => {
    console.log('child se ha montado')
   },[]) */

  /*    useEffect(() => {
    console.log('la variable couter ha cambiado')
   },[counter])
    */

  useEffect(() => {
    return () => {
      console.log("el componente se ha desmontado");
    };
  }, []);

  return (
    <div className="child">
      <div>Este es el componente hijo</div>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};
