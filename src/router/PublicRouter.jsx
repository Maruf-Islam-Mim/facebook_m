/// public router

import Auth from "../pages/auth/Auth";

const publicRouter = [
  {
    path: "/",
    element: <Auth />,
  },
];

/// export router
export default publicRouter;
