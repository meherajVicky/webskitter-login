let url =
  "https://webskitters-database-8cdee-default-rtdb.asia-southeast1.firebasedatabase.app/user.json";

export const sendData = (data) => {
  return async () => {
    const Sdata = async () => {
      const respo = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      if (!respo.ok) throw new Error("sending data falied");
    };
    try {
      await Sdata();
    } catch (error) {
      console.log("error1");
    }
  };
};
