import PropTypes from "prop-types";
import { Fragment } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

import {
  NotificationsPage,
  PaymentPage,
  PersonalDetailsPage,
  PreferencePage,
  PrivatePage,
  SecurityPage,
} from "~/pages/settings";

import { ErrorComponent } from "@/common";
import NavigateSetting from "@/navigate/NavigateSetting";
import BreadCrumAccountSetting from "@/breadcrum/BreadcrumAccountSetting";

const DetailAccountSetting = ({ children }) => {
  const { settings } = useParams();

  switch (settings) {
    case "personal-details":
      children = <PersonalDetailsPage />;
      break;
    case "security":
      children = <SecurityPage />;
      break;
    case "notifications":
      children = <NotificationsPage />;
      break;
    case "payment":
      children = <PaymentPage />;
      break;
    case "private":
      children = <PrivatePage />;
      break;
    case "preference":
      children = <PreferencePage />;
      break;
    default:
      break;
  }

  return (
    <Fragment>
      <BreadCrumAccountSetting />
      <NavigateSetting />
      {children}
    </Fragment>
  );
};

DetailAccountSetting.propTypes = {
  children: PropTypes.node,
};

export default withErrorBoundary(DetailAccountSetting, {
  FallbackComponent: ErrorComponent,
});
