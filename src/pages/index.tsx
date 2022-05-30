import StickyBox from 'react-sticky-box';

export default function IndexPage() {
  return (
    <div className="row">
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div>Sidebar</div>
      </StickyBox>
      <div>Content</div>
    </div>
  );
}
