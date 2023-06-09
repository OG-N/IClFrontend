import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";
import SurveyResults from "./pages/manage/SurveyResults";
import RegionalOperationsTeam from "./pages/manage/RegionalOperationsTeam";


// Dashboard components
const Default = async(() => import("./pages/dashboards/Default"));
const Products = async(() => import("./pages/dashboards/products"));
// const Analytics = async(() => import("./pages/dashboards/Analytics"));
// const SaaS = async(() => import("./pages/dashboards/SaaS"));
const Home = async(() => import("./pages/home"));
const HomePage = async(() => import("./pages/home/Home"));
const ControlTower = async (() => import("./pages/control-tower"));
// const HomeAnalytics = async(() => import("./pages/analytics/HomeAnalytics"));
const Inbound = async(() => import("./pages/dashboards/dwh/Inbound"));
const Outbound = async(() => import("./pages/dashboards/dwh/Outbound"));
const Monitoring = async(() => import("./pages/dashboards/dwh/Monitoring"));
const Costing = async(() => import("./pages/dashboards/dwh/Costing"));
const TenderingAndContracting = async(() => import("./pages/dashboards/dwh/TenderingAndContracting"));
const TransportationAndDistribution = async(() => import("./pages/dashboards/dwh/TransportationAndDistribution"));
const ChainOfCustody = async(() => import("./pages/dashboards/dwh/ChainOfCustody"));
const Manage = async(() => import("./pages/manage/index"));
const HqStartUpstatus = async(() => import("./pages/manage/HqStartUpstatus"));
const BuyInStatus = async(() => import("./pages/manage/BuyInStatus"));
const StaffingLevelsHQ = async(() => import("./pages/manage/StaffingLevelsHQ"));
const StaffingLevelsCountries = async(() => import("./pages/manage/StaffingLevelsCountries"));
const KPIDashboard = async(() => import("./pages/manage/KPIDashboard"));
const IncrementalObligationManagement = async(() => import("./pages/manage/IncrementalObligationManagement"));
const DistributionCostAnalysis = async(() => import("./pages/manage/DistributionCostAnalysis"));
const WarehousingCostAnalysis = async(() => import("./pages/manage/WarehousingCostAnalysis"));
const TotalLandedCostsAnalysis = async(() => import("./pages/manage/TotalLandedCostsAnalysis"));
const GlobalFund = async(() => import("./pages/manage/GlobalFund"));
const LetterOfCredit = async(() => import("./pages/manage/LetterOfCredit"));
const Plan = async(() => import("./pages/plan/index"));
const Source = async(() => import("./pages/source/index"));
const QuantificationReports = async(() => import("./pages/plan/QuantificationReports"));
const Store = async(() => import("./pages/store/index"));
const Deliver = async(() => import("./pages/deliver"));
const CommodityTracking = async(() => import("./pages/deliver/CommodityTracking"));

const Enable = async(() => import("./pages/enable"));
const CommodityTracker = async(() => import("./pages/enable/CommodityTracker"));
const GreenHouseGasMonitoring = async(() => import("./pages/enable/GreenHouseGasMonitoring"));
const Demand = async(() => import("./pages/enable/Demand"));
const KPMGDeliver = async(() => import("./pages/enable/Deliver"));
const MISAdministration = async(() => import("./pages/MISAdministration"));
const ProfileDanRhodes = async(() => import("./pages/home/ProfileDanRhodes"));
const ProfileJabuNyenwa = async(() => import("./pages/home/ProfileJabuNyenwa"));
const ProfileSeanLockhead = async(() => import("./pages/home/ProfileSeanLockhead"));
const ProfileMarilynNoguera = async(() => import("./pages/home/ProfileMarilynNoguera"));
const MacroEyes = async(() => import("./pages/home/MacroEyes"));
const MiddleWareStatus = async(() => import("./pages/MISAdministration/MiddleWareStatus"));
const VendorScoreCard = async(() => import("./pages/store/VendorScoreCard"));
const About = async(() => import("./pages/MISAdministration/About"));
const Parsyl = async(() => import("./pages/store/Parsyl"));
const InventoryAnalysis = async(() => import("./pages/store/InventoryAnalysis"));
const SmallBusiness = async(() => import("./pages/manage/SmallBusiness"));

const routes = [
  {
    path: "/",
    element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/dan-rhodes",
        element: <ProfileDanRhodes />,
      },
      {
        path: "/jabu-nyenwa",
        element: <ProfileJabuNyenwa />,
      },
      {
        path: "/sean-lockhead",
        element: <ProfileSeanLockhead />,
      },
      {
        path: "/marilyn-noguera",
        element: <ProfileMarilynNoguera />,
      },
      {
        path: "macro-eyes",
        element: <MacroEyes />,
      }
    ]
  },
  {
    path: "/manage",
    element: (<DashboardLayout />),
    children: [
      {
        path: "",
        element: <Manage />
      },
      {
        path: "hq-start-up-status",
        element: <HqStartUpstatus />,
      },
      {
        path: "buy-in-status",
        element: <BuyInStatus />,
      },
      {
        path: "staffing-levels-hq",
        element: <StaffingLevelsHQ />,
      },
      {
        path: "staffing-levels-countries",
        element: <StaffingLevelsCountries />,
      },
      {
        path: "kpi-dashboard",
        element: <KPIDashboard />,
      },
      {
        path: "incremental-obligation-management",
        element: <IncrementalObligationManagement />,
      },
      {
        path: "distribution-cost-analysis",
        element: <DistributionCostAnalysis />,
      },
      {
        path: "warehousing-cost-analysis",
        element: <WarehousingCostAnalysis />,
      },
      {
        path: "total-landed-costs-analysis",
        element: <TotalLandedCostsAnalysis />,
      },
      {
        path: "global-fund",
        element: <GlobalFund />,
      },
      {
        path: "letter-of-credit",
        element: <LetterOfCredit />,
      },
      {
        path: "performance-monitoring",
        element: <Home />,
      },
      {
        path: "survey-results",
        element: <SurveyResults />
      },
      {
        path: "regional-operations-team",
        element: <RegionalOperationsTeam />
      },
      {
        path: "small-business",
        element: <SmallBusiness />,
      },
    ],
  },
  {
    path: "/plan",
    element: (<DashboardLayout />),
    children: [
      {
        path: "",
        element: <Plan />
      },
      {
        path: "quantification-reports",
        element: <QuantificationReports />
      }
    ]
  },
  {
    path: "/source",
    element: (<DashboardLayout />),
    children: [
      {
        path: "",
        element: <Source />,
      },
    ],
  },
  {
    path: "/store",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Store />,
      },
      {
        path: "vendor-score-card",
        element: <VendorScoreCard />,
      },
      {
        path: "parsyl",
        element: <Parsyl />
      },
      {
        path: "inventory-analysis",
        element: <InventoryAnalysis />,
      },
    ],
  },
  {
    path: "deliver",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Deliver />,
      },
      {
        path: "commodity-tracking",
        element: <CommodityTracking />,
      },
    ],
  },
  {
    path: "enable",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Enable />,
      },
      {
        path: "commodity-tracker",
        element: <CommodityTracker />,
      },
      {
        path: "green-house-gas-monitoring",
        element: <GreenHouseGasMonitoring />,
      },
      {
        path: "demand",
        element: <Demand />,
      },
      {
        path: "deliver",
        element: <KPMGDeliver />,
      },
    ],
  },
  {
    path: "MISAdministration",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <MISAdministration />,
      },
      {
        path: "middle-ware-status",
        element: <MiddleWareStatus />
      },
    ],
  },
  {
    path: "about",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <About />,
      },
    ],
  },
  {
    path: "shipment",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "pos",
        element: <Default />,
      },
      {
        path: "products",
        element: <Products />,
      }
    ]
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "inbound",
        element: <Inbound />,
      },
      {
        path: "outbound",
        element: <Outbound />,
      },
      {
        path: "monitoring",
        element: <Monitoring />,
      },
      {
        path: "costing",
        element: <Costing />,
      },
      {
        path: "tendering-contracting",
        element: <TenderingAndContracting />,
      },
      {
        path: "ePOD",
      },
      {
        path: "transportation-distribution",
        element: <TransportationAndDistribution />,
      },
      {
        path: "chain-of-custody",
        element: <ChainOfCustody />,
      },
    ],
  },
  {
    path: "control-tower",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ControlTower />,
      },
    ],
  },
  // {
  //   path: "pages",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "profile",
  //       element: <Profile />,
  //     },
  //     {
  //       path: "settings",
  //       element: <Settings />,
  //     },
  //     {
  //       path: "pricing",
  //       element: <Pricing />,
  //     },
  //     {
  //       path: "chat",
  //       element: <Chat />,
  //     },
  //     {
  //       path: "blank",
  //       element: <Blank />,
  //     },
  //   ],
  // },
  // {
  //   path: "projects",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Projects />,
  //     },
  //   ],
  // },
  // {
  //   path: "invoices",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <InvoiceList />,
  //     },
  //     {
  //       path: "detail",
  //       element: <InvoiceDetails />,
  //     },
  //   ],
  // },
  // {
  //   path: "orders",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Orders />,
  //     },
  //   ],
  // },
  // {
  //   path: "tasks",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Tasks />,
  //     },
  //   ],
  // },
  // {
  //   path: "calendar",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Calendar />,
  //     },
  //   ],
  // },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  // {
  //   path: "components",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "accordion",
  //       element: <Accordion />,
  //     },
  //     {
  //       path: "alerts",
  //       element: <Alerts />,
  //     },
  //     {
  //       path: "avatars",
  //       element: <Avatars />,
  //     },
  //     {
  //       path: "badges",
  //       element: <Badges />,
  //     },
  //     {
  //       path: "buttons",
  //       element: <Buttons />,
  //     },
  //     {
  //       path: "cards",
  //       element: <Cards />,
  //     },
  //     {
  //       path: "chips",
  //       element: <Chips />,
  //     },
  //     {
  //       path: "dialogs",
  //       element: <Dialogs />,
  //     },
  //     {
  //       path: "lists",
  //       element: <Lists />,
  //     },
  //     {
  //       path: "menus",
  //       element: <Menus />,
  //     },
  //     {
  //       path: "pagination",
  //       element: <Pagination />,
  //     },
  //     {
  //       path: "progress",
  //       element: <Progress />,
  //     },
  //     {
  //       path: "snackbars",
  //       element: <Snackbars />,
  //     },
  //     {
  //       path: "tooltips",
  //       element: <Tooltips />,
  //     },
  //   ],
  // },
  // {
  //   path: "forms",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "pickers",
  //       element: <Pickers />,
  //     },
  //     {
  //       path: "selection-controls",
  //       element: <SelectionCtrls />,
  //     },
  //     {
  //       path: "selects",
  //       element: <Selects />,
  //     },
  //     {
  //       path: "text-fields",
  //       element: <TextFields />,
  //     },
  //     {
  //       path: "editors",
  //       element: <Editors />,
  //     },
  //     {
  //       path: "formik",
  //       element: <Formik />,
  //     },
  //   ],
  // },
  // {
  //   path: "tables",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "simple-table",
  //       element: <SimpleTable />,
  //     },
  //     {
  //       path: "advanced-table",
  //       element: <AdvancedTable />,
  //     },
  //     {
  //       path: "data-grid",
  //       element: <DataGrid />,
  //     },
  //   ],
  // },
  // {
  //   path: "icons",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "material-icons",
  //       element: <MaterialIcons />,
  //     },
  //     {
  //       path: "feather-icons",
  //       element: <FeatherIcons />,
  //     },
  //   ],
  // },
  // {
  //   path: "charts",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "chartjs",
  //       element: <Chartjs />,
  //     },
  //     {
  //       path: "apexcharts",
  //       element: <ApexCharts />,
  //     },
  //   ],
  // },
  // {
  //   path: "maps",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "google-maps",
  //       element: <GoogleMaps />,
  //     },
  //     {
  //       path: "vector-maps",
  //       element: <VectorMaps />,
  //     },
  //   ],
  // },
  // {
  //   path: "documentation",
  //   element: <DocLayout />,
  //   children: [
  //     {
  //       path: "welcome",
  //       element: <Welcome />,
  //     },
  //     {
  //       path: "getting-started",
  //       element: <GettingStarted />,
  //     },
  //     {
  //       path: "routing",
  //       element: <Routing />,
  //     },
  //     {
  //       path: "auth/auth0",
  //       element: <Auth0 />,
  //     },
  //     {
  //       path: "auth/cognito",
  //       element: <Cognito />,
  //     },
  //     {
  //       path: "auth/firebase",
  //       element: <Firebase />,
  //     },
  //     {
  //       path: "auth/jwt",
  //       element: <JWT />,
  //     },
  //     {
  //       path: "guards",
  //       element: <Guards />,
  //     },
  //     {
  //       path: "environment-variables",
  //       element: <EnvironmentVariables />,
  //     },
  //     {
  //       path: "deployment",
  //       element: <Deployment />,
  //     },
  //     {
  //       path: "theming",
  //       element: <Theming />,
  //     },
  //     {
  //       path: "api-calls",
  //       element: <APICalls />,
  //     },
  //     {
  //       path: "redux",
  //       element: <Redux />,
  //     },
  //     {
  //       path: "internationalization",
  //       element: <Internationalization />,
  //     },
  //     {
  //       path: "eslint-and-prettier",
  //       element: <ESLintAndPrettier />,
  //     },
  //     {
  //       path: "support",
  //       element: <Support />,
  //     },
  //   ],
  // },
  // {
  //   path: "changelog",
  //   element: <DocLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Changelog />,
  //     },
  //   ],
  // },
  // {
  //   path: "private",
  //   element: (
  //     <AuthGuard>
  //       <DashboardLayout />
  //     </AuthGuard>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <ProtectedPage />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
