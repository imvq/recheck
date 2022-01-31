import Footer from 'components/shared/Footer';

import MainArea from './MainArea';

import * as styled from './styled';

/**
 * A page with information about other user (not the current one).
 * Used to view reviews about them.
 *
 * Viewer have to have access to view the page.
 */
function ObservedProfilePage() {
  return (
    <styled.ObservedProfilePage>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      <MainArea />

      <Footer />
    </styled.ObservedProfilePage>
  );
}

export default ObservedProfilePage;
