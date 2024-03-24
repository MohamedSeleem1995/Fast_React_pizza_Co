import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
function UpdateOrder({ order }) {
  UpdateOrder.propTypes = {
    order: PropTypes.object,
  };
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={"primary"} order={order}>
        Make Priority
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
