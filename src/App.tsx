/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Footer from "./Footer";
import Pricing from "./Pricing";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <Navbar />
    <Herosection />
        <Pricing />
      {/* Footer */}
      <Footer />
    </div>
  );
}
