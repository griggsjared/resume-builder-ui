import { PageTitleBar } from "../_components/page-title-bar";

export default function Users() {
  return (
    <>
      <PageTitleBar title="Users" />
      <div>
        The users listing page. Only admin will be able to see anything in this
        page and child pages.
      </div>
    </>
  );
}
