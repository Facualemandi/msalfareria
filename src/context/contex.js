import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const getContext = createContext();

export const useTheContext = () => {
  const context = useContext(getContext);

  return context;
};

export function ProviderContext({ children }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [userAutentication, setUserAutentication] = useState(null);
  const [loading, setLoading] = useState(true)

  // Obtenemos los datos de la collección 'AllProducts' y lo guardamos en products
  const dbCollectAllProducts = collection(db, "allProducts");

  const getAllProducts = async () => {
    const data = await getDocs(dbCollectAllProducts);
    console.log('Ejecutado de nuevo')
    setProducts(
      data.docs.map((product) => ({ ...product.data(), id: product.id }))
    );
  };

  //Creamos un State para manejar el Email y password del usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Función para Loguear/Ingresar a un usuario
  const login = async (email, password, user) => {
    await signInWithEmailAndPassword(auth, email, password, user);
  };

  //Función para Registrar un usuario
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  //Funcion para cerrar sesion/LogOut del usuario
  const logAuth = async () => {
    await signOut(auth);
    navigate("/");
  };

  //useEffects Proximamente a comentar
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserAutentication(currentUser);
      setLoading(false)
      console.log(currentUser);
    });
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);



  return (
    <getContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        products,
        logAuth,
        userAutentication,
        loading,
      }}
    >
      {children}
    </getContext.Provider>
  );
}
