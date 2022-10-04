import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

const getContext = createContext();

export const useTheContext = () => {
  const context = useContext(getContext);

  return context;
};

export function ProviderContext({ children }) {
  const [products, setProducts] = useState([]);
  const [viewOneProduct, setViewOneProduct] = useState([])
  const navigate = useNavigate();
  const [userAutentication, setUserAutentication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartUser, setCartUser] = useState([]);
  const [productsLikes, setProductsLikes] = useState([])

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

  //Función para Registrar un usuario y agregarlo a la coleccoón de User
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);

    const saveUser = onAuthStateChanged(auth, async (currentUser) => {
         await addUserToCollect(currentUser.email, currentUser.uid);
    })

    saveUser();

  };

  //Funcion para cerrar sesion/LogOut del usuario
  const logAuth = async () => {
    await signOut(auth);
    navigate("/");
  };

  //Obtenemos un producto solo para mostar en ViewProduct -- (Revisar)
  const getProduct = async (product) => {
     localStorage.setItem('alfareriaMsProduct' , JSON.stringify(product))

  }


// Acá se ejecuta la funcion que obtenemos de register
  const addUserToCollect = async (email, uid) => {
      const docRef = doc(db, "Users", uid);
      const payload = { email, cartUser,productsLikes, uid };
      await setDoc(docRef, payload);
  };



  //useEffects Proximamente a comentar
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserAutentication(currentUser);
      setLoading(false)

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
        getProduct,
        viewOneProduct,
      }}
    >
      {children}
    </getContext.Provider>
  );
}
