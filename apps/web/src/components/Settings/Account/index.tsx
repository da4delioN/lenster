import MetaTags from '@components/Common/MetaTags';
import SuperFollow from '@components/Settings/Account/SuperFollow';
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout';
import { t } from '@lingui/macro';
import { APP_NAME } from 'data/constants';
import type { NextPage } from 'next';
import Custom404 from 'src/pages/404';
import { useAppStore } from 'src/store/app';

import SettingsSidebar from '../Sidebar';
import CrossPost from './CrossPost';
import SetProfile from './SetProfile';
import Verification from './Verification';

const AccountSettings: NextPage = () => {
  const currentProfile = useAppStore((state) => state.currentProfile);

  if (!currentProfile) {
    return <Custom404 />;
  }

  return (
    <GridLayout>
      <MetaTags title={t`Account settings • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsSidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <SetProfile />
        <SuperFollow />
        <Verification />
        <CrossPost />
      </GridItemEight>
    </GridLayout>
  );
};

export default AccountSettings;
