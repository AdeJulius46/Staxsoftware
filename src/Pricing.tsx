import React from 'react'
import { useState } from 'react';

import { motion } from "motion/react";

const Pricing = () => {
    const [planType, setPlanType] = useState<"individual" | "team">("individual");
  return (
    <div>
         <section className="py-24 px-8 md:px-24 bg-surface-container-low/30 ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif text-on-surface mb-8"
              >
                Explore plans
              </motion.h2>
              
              {/* Toggle */}
              <div className="inline-flex p-1 bg-surface-container rounded-full border border-outline-variant/10">
                <button 
                  onClick={() => setPlanType("individual")}
                  className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${planType === "individual" ? "bg-surface shadow-md text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Individual
                </button>
                <button 
                  onClick={() => setPlanType("team")}
                  className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${planType === "team" ? "bg-surface shadow-md text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Team and Enterprise
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(planType === "individual" ? [
                {
                  name: "Health",
                  price: "₦",
                  description: "Try STAX for free",
                  subtext: "Free for everyone",
                  features: ["Basic POS application", "Single location management", "Community support", "Standard reporting"],
                  icon: "hub"
                },
                {
                  name: "Commerce",
                  price: "$17",
                  description: "For everyday productivity",
                  subtext: "Per month with annual subscription",
                  features: ["Advanced analytics dashboard", "Multi-location syncing", "Priority email support", "Custom inventory tracking"],
                  icon: "account_tree",
                  popular: true
                },
                {
                  name: "Education",
                  price: "From $100",
                  description: "Large scale operations",
                  subtext: "Per month billed monthly",
                  features: ["Full hardware integration", "24/7 Dedicated support", "Custom API access", "White-label solutions"],
                  icon: "schema"
                }
              ] : [
                {
                  name: "Starter",
                  price: "$0",
                  description: "For small teams",
                  subtext: "Up to 3 members",
                  features: ["Shared POS workspace", "Team collaboration tools", "Standard reporting", "Community support"],
                  icon: "groups"
                },
                {
                  name: "Pro",
                  price: "$25",
                  description: "Advanced team features",
                  subtext: "Per user/month, billed annually",
                  features: ["Everything in Individual Pro", "Admin control panel", "Team performance analytics", "Priority 24/7 support"],
                  icon: "corporate_fare",
                  popular: true
                },
                {
                  name: "Max",
                  price: "Custom",
                  description: "Enterprise scale",
                  subtext: "Contact sales for pricing",
                  features: ["Everything in Team Pro", "SLA guarantees", "Dedicated account manager", "On-site hardware setup"],
                  icon: "business_center"
                }
              ]).map((plan, idx) => (
                <motion.div 
                  key={plan.name + planType}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12 }}
                  className={`relative bg-surface-container-lowest p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border ${plan.popular ? 'border-primary/30 ring-1 ring-primary/10' : 'border-outline-variant/10'} flex flex-col transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <span className={`material-symbols-outlined text-4xl mb-6 ${plan.popular ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {plan.icon}
                    </span>
                    <h3 className="text-3xl font-serif text-on-surface mb-2">{plan.name}</h3>
                    <p className="text-on-surface-variant text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-serif text-on-surface">{plan.price}</span>
                      {plan.price !== "Custom" && plan.price !== "$0" && (
                        <span className="text-on-surface-variant text-sm">/mo</span>
                      )}
                    </div>
                    <p className="text-on-surface-variant text-xs mt-1">{plan.subtext}</p>
                  </div>

                  <button className={`w-full py-4 rounded-xl font-bold mb-10 transition-all duration-300 ${plan.popular ? 'bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20' : 'bg-on-surface text-surface hover:opacity-90'}`}>
                    {plan.name === "Max" && planType === "team" ? "Contact Sales" : "Try STAX"}
                  </button>

                  <div className="space-y-4 pt-8 border-t border-outline-variant/10">
                    {plan.name !== "Starter" && (
                      <p className="text-[10px] font-bold text-on-surface uppercase tracking-wider opacity-60">
                        Everything in {idx === 1 ? 'Starter' : 'Pro'}, plus:
                      </p>
                    )}
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg">check</span>
                        <span className="text-sm text-on-surface-variant leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default Pricing
