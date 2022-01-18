import { Button } from "@mui/material";
import accounting from "accounting";
import { getBasketTotal } from "../reducer.js";
import { useStateValue } from "../StateProvider.js";

const Total = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
      <Button
        style={{ marginTop: "2rem", fontWeight: "bold" }}
        variant="contained"
        color="secondary"
      >
        Check Out
      </Button>
    </div>
  );
};

export default Total;
