import {
  FC,
  FormEvent,
  Suspense,
  unstable_SuspenseList as SuspenseList,
  useState,
  unstable_useTransition as useTransition,
} from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, Divider, Input, Menu, Message } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';

import Spinner from 'components/molecules/Spinner';
import OrgInfo from 'containers/organisms/OrgInfo';
import MemberList from 'containers/organisms/MemberList';
import './Members.css';

type Props = {
  orgCodeList: string[];
  prefetch?: (orgCode: string) => void;
};

const Members: FC<Props> = ({ orgCodeList, prefetch = () => undefined }) => {
  const [orgCode, setOrgCode] = useState('');
  const [input, setInput] = useState('');
  const [startTransition, isPending] = useTransition();
  const { reset } = useQueryErrorResetBoundary();

  const menuItems = orgCodeList.map((code) => ({
    key: code,
    name: capitalize(code),
    onClick: () => {
      setInput('');

      if (orgCode) {
        startTransition(() => setOrgCode(code));
      } else {
        setOrgCode(code);
      }
    },
    onMouseOver: () => prefetch(code),
    active: code === orgCode,
  }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setOrgCode(input.toLowerCase().trim());
  };

  return (
    <>
      <header className="app-header">
        <h1>Member List</h1>
      </header>
      <form className="search-form" onSubmit={handleSubmit}>
        <Input
          placeholder="type org code..."
          type="text"
          value={input}
          onChange={(_, data) => setInput(data.value)}
        />
        <Button type="submit" disabled={isPending} primary>
          Search
        </Button>
      </form>
      <Menu items={menuItems} text />
      <Divider />
      <div className={isPending ? 'loading' : ''}>
        <ErrorBoundary
          fallbackRender={({ resetErrorBoundary }) => (
            <>
              <Message warning>Code: {orgCode} not Found</Message>
              <Button color="olive" onClick={() => resetErrorBoundary()}>
                Reset Error
              </Button>
            </>
          )}
          onReset={() => reset()}
        >
          <SuspenseList revealOrder="forwards">
            <Suspense fallback={<Spinner size="small" />}>
              <OrgInfo orgCode={orgCode} />
            </Suspense>
            <Suspense fallback={<Spinner size="large" />}>
              <MemberList orgCode={orgCode} />
            </Suspense>
          </SuspenseList>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Members;
