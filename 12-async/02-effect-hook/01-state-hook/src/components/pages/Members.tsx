import { FC } from 'react';
import { Helmet } from 'react-helmet';
import capitalize from 'lodash/capitalize';
import { Divider } from 'semantic-ui-react';

import { User } from 'domains/github';
import Spinner from 'components/molecules/Spinner';
import HomeButton from 'components/molecules/HomeButton';
import MemberList from 'components/organisms/MemberList';

type Props = {
  orgCode: string;
  users: User[];
  isLoading?: boolean;
};

const Members: FC<Props> = ({
  orgCode = 'unknownCompany',
  users = [],
  isLoading = false,
}) => {
  const title = `Dev members of ${capitalize(orgCode)}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      {isLoading ? <Spinner /> : <MemberList users={users} />}
      <Divider hidden />
      <HomeButton />
    </>
  );
};

export default Members;
