import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const getContext = createContext();

export const useTheContext = () => {
  const context = useContext(getContext);

  return context;
};

export function ProviderContext({ children }) {
  const [uid, setUid] = useState('')
  const [products, setProducts] = useState([]);
  const [viewOneProduct, setViewOneProduct] = useState([]);
  const navigate = useNavigate();
  const [userAutentication, setUserAutentication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartUser, setCartUser] = useState([]);
  const [productsLikes, setProductsLikes] = useState([]);

  // Obtenemos los datos de la collección 'AllProducts' y lo guardamos en products
  const dbCollectAllProducts = collection(db, "allProducts");
  const userCart = collection(db, "users");

  const getAllProducts = async (uid) => {
    const data = await getDocs(dbCollectAllProducts);
    setProducts(data.docs.map((product) => ({ ...product.data(), id: product.id })));


    const docCollect = doc(userCart, uid);
    const getUserCart = await getDoc(docCollect);
    console.log(getUserCart.data().cartUser)
    setCartUser(getUserCart.data().cartUser)

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
    });
    saveUser();
  };

  //Funcion para cerrar sesion/LogOut del usuario
  const logAuth = async () => {
    await signOut(auth);
    navigate("/");
  };

  //Obtenemos un producto solo para mostar en ViewProduct -- (Revisar)
  const getProduct = async (product) => {
    localStorage.setItem("alfareriaMsProduct", JSON.stringify(product));
  };

  // Acá se ejecuta la funcion que obtenemos de register
  const addUserToCollect = async (email, uid) => {
    const docRef = doc(db, "users", uid);
    const payload = { email, cartUser, productsLikes, uid };
    await setDoc(docRef, payload);
  };

  // Acá creamos una función para agregar productos al carrito del usuario
  const addProduct = async (uid, parseProductStorage) => {
    const refCollect = collection(db, "users");
    const docRef = doc(refCollect, uid);

    const getOneDoc = doc(db, "users", uid);
    const oneDoc = await getDoc(getOneDoc);

    const cartUser = oneDoc.data().cartUser;
    const findProductInCart = cartUser.find(
      (obj) => obj.id === parseProductStorage.id
    );

    if (findProductInCart) {
      console.log("Ya existe");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        timer: 1500,
      });
      await updateDoc(docRef, { cartUser: [...cartUser, parseProductStorage] });
      await getAllProducts(uid)
    }
  };

  //useEffects Proximamente a comentar
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserAutentication(currentUser);
      setLoading(false);
      setUid(currentUser.uid);
      getAllProducts(currentUser.uid);
    });
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
        addProduct,
        uid,
        cartUser,
      }}
    >
      {children}
    </getContext.Provider>
  );
}
