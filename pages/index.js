import Button from "../components/Button/Button";
import PlusIcon from "../components/icons/iconsFiles/Plus";

export default function Home() {
  return (
    <div>
      <PlusIcon />
      <Button variations="primary" label="New Award" size="md" />
    </div>
  );
}
