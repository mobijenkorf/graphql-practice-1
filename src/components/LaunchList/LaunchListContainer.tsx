import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

const LaunchListContainer = (props: OwnProps) => {
  const { handleIdChange } = props;
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} handleIdChange={handleIdChange} />;
};

export default LaunchListContainer;
