import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import capitalize from 'lodash/capitalize';
import { Divider } from 'semantic-ui-react';

import Spinner from 'components/molecules/Spinner';
import HomeButton from 'components/molecules/HomeButton';
import MemberList from 'containers/organisms/MemberList';
import ErrorBoundary from 'ErrorBoundary';

const Members: FC<{ orgCode: string }> = ({ orgCode = 'UnknownCompany' }) => {
  const title = `Dev members of ${capitalize(orgCode)}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      <ErrorBoundary
        statusMessages={{
          404: `Code: "${orgCode}" not found`,
        }}
      >
        <Suspense fallback={<Spinner size="big" />}>
          <MemberList orgCode={orgCode} />
        </Suspense>
      </ErrorBoundary>
      <Divider hidden />
      <HomeButton />
    </>
  );
};

export default Members;
