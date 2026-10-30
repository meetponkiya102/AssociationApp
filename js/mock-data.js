/**
 * Market Association Fee Tracking System (APMC Mandi ERP)
 * mock-data.js - Central Data Store & Persistence Manager
 */

const DEFAULT_AGENTS = [
  { id: "AGT-101", name: "Rameshchandra K. Patel", firmName: "Kisan Agro Agency", mobile: "9825012345", email: "kisan.agro@unjhamandi.in", address: "Shop 14, APMC Market Yard, Unjha - 384170", licenseNo: "APMC/UNJ/AGT-0421", status: "Approved" },
  { id: "AGT-102", name: "Mukeshbhai P. Patel", firmName: "Patel Brothers Trading Co.", mobile: "9825123456", email: "patel.bros@apmc.in", address: "Shop 22, Cotton Market Yard, Kadi - 382715", licenseNo: "APMC/KAD/AGT-0488", status: "Approved" },
  { id: "AGT-103", name: "Dineshbhai S. Prajapati", firmName: "Jay Ambe Commission Agent", mobile: "9825234567", email: "jayambe.ca@mandi.in", address: "Shop 09, Main Market Yard, Gondal - 360311", licenseNo: "APMC/GDL/AGT-0512", status: "Approved" },
  { id: "AGT-104", name: "Hasmukhbhai B. Chaudhary", firmName: "Mahadev Krishi Kendra", mobile: "9825345678", email: "mahadev.kendra@mandi.in", address: "Shop 33, Grain Section, Mehsana - 384002", licenseNo: "APMC/MSN/AGT-0556", status: "Approved" },
  { id: "AGT-105", name: "Bharatbhai M. Desai", firmName: "Uma Trading Corporation", mobile: "9825456789", email: "uma.trading@mandi.in", address: "Shop 04, Grains Section, APMC Rajkot - 360003", licenseNo: "APMC/RJK/AGT-0601", status: "Approved" },
  { id: "AGT-106", name: "Pravinbhai R. Vora", firmName: "Annapurna Agro Agency", mobile: "9825567890", email: "annapurna@mandi.in", address: "Shop 19, APMC Market, Botad - 364710", licenseNo: "APMC/BTD/AGT-0624", status: "Approved" },
  { id: "AGT-107", name: "Vijaybhai H. Joshi", firmName: "Swastik Trading Co.", mobile: "9825678901", email: "swastik.jamnagar@mandi.in", address: "Shop 45, New Yard, Jamnagar - 361001", licenseNo: "APMC/JAM/AGT-0677", status: "Pending" },
  { id: "AGT-108", name: "Chetanbhai G. Modi", firmName: "Jai Kisan Mandi Agency", mobile: "9825789012", email: "jaikisan.modi@mandi.in", address: "Shop 02, APMC Yard, Amreli - 365601", licenseNo: "APMC/AMR/AGT-0710", status: "Suspended" }
];

const DEFAULT_TRADERS = [
  { id: "TRD-201", name: "Sureshchandra N. Agarwal", firmName: "Shree Ganesh Traders", mobile: "9898011223", email: "ganesh.traders@ahmedabad.in", address: "Plot 102, GIDC Phase 2, Vatva, Ahmedabad - 382445", gstNo: "24AAACG1234M1Z2", status: "Approved" },
  { id: "TRD-202", name: "Anandkumar Singhania", firmName: "Balaji Cotton Co.", mobile: "9898122334", email: "balaji.cotton@surat.in", address: "Plot 45, Ring Road Textile Complex, Surat - 395002", gstNo: "24AABCS5678Q1Z4", status: "Approved" },
  { id: "TRD-203", name: "Kishorbhai L. Thakkar", firmName: "Om Sai Agro Industries", mobile: "9898233445", email: "omsai.agro@baroda.in", address: "Mandi Road, Sayajiganj, Vadodara - 390005", gstNo: "24AABCO9012R1Z8", status: "Approved" },
  { id: "TRD-204", name: "Jitendrabhai Shah", firmName: "Navrang Grains Corp", mobile: "9898344556", email: "navrang.grains@bhavnagar.in", address: "Shop 11, Oil Mill Zone, Bhavnagar - 364001", gstNo: "24AACCN3456P1Z3", status: "Approved" },
  { id: "TRD-205", name: "Maheshbhai Varma", firmName: "LMN Agro Impex", mobile: "9898455667", email: "lmn.agro@morbi.in", address: "Near Goods Shed Siding, Morbi - 363641", gstNo: "24AABCL7890T1Z1", status: "Approved" },
  { id: "TRD-206", name: "Rajeshbhai K. Mehta", firmName: "Shanti Cotton Mills", mobile: "9898566778", email: "shanti.mills@surendranagar.in", address: "Industrial Area, Surendranagar - 363001", gstNo: "24AAECS1122D1Z9", status: "Approved" },
  { id: "TRD-207", name: "Pankajbhai Soni", firmName: "Maruti Trading Co.", mobile: "9898677889", email: "maruti.trade@himatnagar.in", address: "APMC Gate 2, Himatnagar - 383001", gstNo: "24AABCM3344E1Z7", status: "Approved" },
  { id: "TRD-208", name: "Tarunbhai M. Parekh", firmName: "Vardhman Agro Foods", mobile: "9898788990", email: "vardhman.godhra@mandi.in", address: "Station Road, Godhra - 389001", gstNo: "24AACCV5566G1Z5", status: "Approved" },
  { id: "TRD-209", name: "Dipakbhai C. Trivedi", firmName: "Ambika Food Products", mobile: "9898899001", email: "ambika.foods@nadiad.in", address: "GIDC Industrial Estate, Nadiad - 387001", gstNo: "24AACCA7788H1Z3", status: "Approved" },
  { id: "TRD-210", name: "Jayeshbhai Somani", firmName: "Gujarat Cotton Traders", mobile: "9898900112", email: "gujarat.cotton@kalol.in", address: "Highway Commercial Hub, Kalol - 382721", gstNo: "24AABCG9900J1Z1", status: "Approved" },
  { id: "TRD-211", name: "Gautambhai B. Patel", firmName: "Tirupati Pulse Mills", mobile: "9898012349", email: "tirupati.pulse@sanand.in", address: "Sanand-Bavla Road, Sanand - 382110", gstNo: "24AAACT2233K1Z6", status: "Pending" },
  { id: "TRD-212", name: "Sanjaybhai Rathi", firmName: "Bharat Agro Corp", mobile: "9898123450", email: "bharat.corp@deesa.in", address: "APMC Market Yard, Deesa - 385535", gstNo: "24AABCB4455L1Z4", status: "Rejected" }
];

function generateInitialBills() {
  const bills = [];
  const septRate = 1.50;
  const octRate = 2.00;

  // September 2026 Bills (All locked, finalized in previous monthly cycle)
  const septData = [
    { billNo: "2041", date: "2026-09-02", agt: "AGT-101", trd: "TRD-201", bags: 137, src: "Direct Entry" },
    { billNo: "2042", date: "2026-09-04", agt: "AGT-102", trd: "TRD-202", bags: 480, src: "Direct Entry" },
    { billNo: "B-117", date: "2026-09-05", agt: "AGT-103", trd: "TRD-203", bags: 62, src: "Manual" },
    { billNo: "2045", date: "2026-09-08", agt: "AGT-104", trd: "TRD-204", bags: 340, src: "Direct Entry" },
    { billNo: "B-118", date: "2026-09-10", agt: "AGT-101", trd: "TRD-205", bags: 185, src: "Manual" },
    { billNo: "B-124", date: "2026-09-12", agt: "AGT-105", trd: "TRD-206", bags: 520, src: "Manual" },
    { billNo: "2050", date: "2026-09-14", agt: "AGT-106", trd: "TRD-207", bags: 215, src: "Direct Entry" },
    { billNo: "2052", date: "2026-09-15", agt: "AGT-102", trd: "TRD-208", bags: 290, src: "Direct Entry" },
    { billNo: "B-129", date: "2026-09-18", agt: "AGT-103", trd: "TRD-209", bags: 75, src: "Manual" },
    { billNo: "2058", date: "2026-09-19", agt: "AGT-104", trd: "TRD-210", bags: 410, src: "Direct Entry" },
    { billNo: "2061", date: "2026-09-21", agt: "AGT-101", trd: "TRD-202", bags: 260, src: "Direct Entry" },
    { billNo: "2064", date: "2026-09-22", agt: "AGT-102", trd: "TRD-203", bags: 340, src: "Direct Entry" },
    { billNo: "B-135", date: "2026-09-24", agt: "AGT-105", trd: "TRD-201", bags: 190, src: "Manual" },
    { billNo: "2070", date: "2026-09-25", agt: "AGT-106", trd: "TRD-205", bags: 275, src: "Direct Entry" },
    { billNo: "2072", date: "2026-09-26", agt: "AGT-104", trd: "TRD-206", bags: 310, src: "Direct Entry" },
    { billNo: "B-140", date: "2026-09-28", agt: "AGT-103", trd: "TRD-207", bags: 140, src: "Manual" },
    { billNo: "2078", date: "2026-09-29", agt: "AGT-102", trd: "TRD-210", bags: 420, src: "Direct Entry" },
    { billNo: "B-144", date: "2026-09-30", agt: "AGT-101", trd: "TRD-204", bags: 270, src: "Manual" }
  ];

  septData.forEach((item, idx) => {
    const agt = DEFAULT_AGENTS.find(a => a.id === item.agt);
    const trd = DEFAULT_TRADERS.find(t => t.id === item.trd);
    bills.push({
      id: `BIL-SEP-${String(idx + 1).padStart(3, "0")}`,
      billNo: item.billNo,
      date: item.date,
      month: "2026-09",
      agentId: agt.id,
      agentName: agt.firmName,
      traderId: trd.id,
      traderName: trd.firmName,
      agentBags: item.bags,
      traderBags: item.bags,
      finalBags: item.bags,
      ratePerBag: septRate,
      status: "Locked",
      source: item.src,
      auditTrail: [
        { timestamp: `${item.date} 10:15 AM`, action: "Bill Created", user: `${agt.firmName} (${item.src})`, details: `Entered ${item.bags} bags` },
        { timestamp: `${item.date} 03:20 PM`, action: "Trader Verified", user: trd.firmName, details: `Confirmed ${item.bags} bags` },
        { timestamp: "2026-10-05 05:30 PM", action: "Month Locked", user: "Association Office", details: "September 2026 billing closed and locked" }
      ]
    });
  });

  // October 2026 Bills (Current Billing Period)
  const octData = [
    // Matched verified bills
    { billNo: "2081", date: "2026-10-01", agt: "AGT-101", trd: "TRD-201", agtBags: 300, trdBags: 300, status: "Matched", src: "Direct Entry" },
    { billNo: "2082", date: "2026-10-02", agt: "AGT-102", trd: "TRD-202", agtBags: 450, trdBags: 450, status: "Matched", src: "Direct Entry" },
    { billNo: "B-151", date: "2026-10-03", agt: "AGT-103", trd: "TRD-203", agtBags: 180, trdBags: 180, status: "Matched", src: "Manual" },
    { billNo: "2085", date: "2026-10-04", agt: "AGT-104", trd: "TRD-204", agtBags: 350, trdBags: 350, status: "Matched", src: "Direct Entry" },
    { billNo: "B-155", date: "2026-10-05", agt: "AGT-105", trd: "TRD-205", agtBags: 95, trdBags: 95, status: "Matched", src: "Manual" },
    { billNo: "2089", date: "2026-10-06", agt: "AGT-106", trd: "TRD-206", agtBags: 520, trdBags: 520, status: "Matched", src: "Direct Entry" },
    { billNo: "B-159", date: "2026-10-07", agt: "AGT-101", trd: "TRD-207", agtBags: 220, trdBags: 220, status: "Matched", src: "Manual" },
    { billNo: "2094", date: "2026-10-08", agt: "AGT-102", trd: "TRD-208", agtBags: 310, trdBags: 310, status: "Matched", src: "Direct Entry" },
    { billNo: "2098", date: "2026-10-09", agt: "AGT-104", trd: "TRD-209", agtBags: 160, trdBags: 160, status: "Matched", src: "Direct Entry" },
    { billNo: "B-163", date: "2026-10-10", agt: "AGT-105", trd: "TRD-210", agtBags: 400, trdBags: 400, status: "Matched", src: "Manual" },
    { billNo: "B-167", date: "2026-10-11", agt: "AGT-103", trd: "TRD-201", agtBags: 290, trdBags: 290, status: "Matched", src: "Manual" },
    { billNo: "2104", date: "2026-10-12", agt: "AGT-101", trd: "TRD-202", agtBags: 240, trdBags: 240, status: "Matched", src: "Direct Entry" },
    { billNo: "2108", date: "2026-10-13", agt: "AGT-102", trd: "TRD-203", agtBags: 380, trdBags: 380, status: "Matched", src: "Direct Entry" },
    { billNo: "2112", date: "2026-10-14", agt: "AGT-106", trd: "TRD-204", agtBags: 215, trdBags: 215, status: "Matched", src: "Direct Entry" },
    { billNo: "2115", date: "2026-10-15", agt: "AGT-104", trd: "TRD-205", agtBags: 490, trdBags: 490, status: "Matched", src: "Direct Entry" },
    { billNo: "B-172", date: "2026-10-16", agt: "AGT-105", trd: "TRD-206", agtBags: 230, trdBags: 230, status: "Matched", src: "Manual" },
    { billNo: "2121", date: "2026-10-17", agt: "AGT-101", trd: "TRD-208", agtBags: 330, trdBags: 330, status: "Matched", src: "Direct Entry" },
    { billNo: "2125", date: "2026-10-18", agt: "AGT-102", trd: "TRD-209", agtBags: 280, trdBags: 280, status: "Matched", src: "Direct Entry" },
    { billNo: "B-178", date: "2026-10-19", agt: "AGT-103", trd: "TRD-210", agtBags: 175, trdBags: 175, status: "Matched", src: "Manual" },
    { billNo: "2130", date: "2026-10-20", agt: "AGT-104", trd: "TRD-201", agtBags: 410, trdBags: 410, status: "Matched", src: "Direct Entry" },

    // Open Mismatches (Irregular realistic numbers)
    { billNo: "2134", date: "2026-10-21", agt: "AGT-101", trd: "TRD-202", agtBags: 320, trdBags: 290, status: "Mismatch", src: "Direct Entry" },
    { billNo: "2138", date: "2026-10-22", agt: "AGT-102", trd: "TRD-201", agtBags: 180, trdBags: 200, status: "Mismatch", src: "Direct Entry" },
    { billNo: "B-184", date: "2026-10-23", agt: "AGT-103", trd: "TRD-204", agtBags: 500, trdBags: 480, status: "Mismatch", src: "Manual" },
    { billNo: "2142", date: "2026-10-24", agt: "AGT-104", trd: "TRD-205", agtBags: 260, trdBags: 250, status: "Mismatch", src: "Direct Entry" },
    { billNo: "B-188", date: "2026-10-25", agt: "AGT-105", trd: "TRD-203", agtBags: 140, trdBags: 160, status: "Mismatch", src: "Manual" },
    { billNo: "2147", date: "2026-10-26", agt: "AGT-106", trd: "TRD-207", agtBags: 375, trdBags: 360, status: "Mismatch", src: "Direct Entry" },

    // Resolved by Association
    {
      billNo: "2149", date: "2026-10-22", agt: "AGT-101", trd: "TRD-203", agtBags: 300, trdBags: 280, finalBags: 290,
      status: "Resolved", src: "Manual",
      resolutionRemark: "Weighbridge slip verify: Truck GJ-02-XX-4902 net weight was 290 bags. Both agreed."
    },
    {
      billNo: "2153", date: "2026-10-23", agt: "AGT-102", trd: "TRD-206", agtBags: 450, trdBags: 410, finalBags: 450,
      status: "Resolved", src: "Direct Entry",
      resolutionRemark: "Gate register entry confirmed 450 bags delivered. Trader typo acknowledged."
    },

    // Pending verification (One party entered, waiting for other)
    { billNo: "2158", date: "2026-10-27", agt: "AGT-101", trd: "TRD-205", agtBags: 210, trdBags: null, status: "Pending", src: "Direct Entry" },
    { billNo: "2161", date: "2026-10-28", agt: "AGT-102", trd: "TRD-204", agtBags: 340, trdBags: null, status: "Pending", src: "Direct Entry" },
    { billNo: "B-194", date: "2026-10-28", agt: "AGT-103", trd: "TRD-202", agtBags: null, trdBags: 190, status: "Pending", src: "Manual" },
    { billNo: "2166", date: "2026-10-29", agt: "AGT-104", trd: "TRD-208", agtBags: 275, trdBags: null, status: "Pending", src: "Direct Entry" },
    { billNo: "B-199", date: "2026-10-29", agt: "AGT-105", trd: "TRD-207", agtBags: null, trdBags: 320, status: "Pending", src: "Manual" },
    { billNo: "2172", date: "2026-10-30", agt: "AGT-106", trd: "TRD-209", agtBags: 410, trdBags: null, status: "Pending", src: "Direct Entry" },
    { billNo: "B-205", date: "2026-10-30", agt: "AGT-101", trd: "TRD-210", agtBags: 180, trdBags: null, status: "Pending", src: "Manual" },
    { billNo: "B-208", date: "2026-10-30", agt: "AGT-102", trd: "TRD-201", agtBags: null, trdBags: 250, status: "Pending", src: "Manual" },

    // Additional matched bills to reach 60+ total
    { billNo: "2175", date: "2026-10-20", agt: "AGT-106", trd: "TRD-208", agtBags: 310, trdBags: 310, status: "Matched", src: "Direct Entry" },
    { billNo: "B-212", date: "2026-10-21", agt: "AGT-103", trd: "TRD-209", agtBags: 195, trdBags: 195, status: "Matched", src: "Manual" },
    { billNo: "2180", date: "2026-10-22", agt: "AGT-104", trd: "TRD-210", agtBags: 280, trdBags: 280, status: "Matched", src: "Direct Entry" },
    { billNo: "B-216", date: "2026-10-23", agt: "AGT-105", trd: "TRD-202", agtBags: 360, trdBags: 360, status: "Matched", src: "Manual" },
    { billNo: "2184", date: "2026-10-24", agt: "AGT-101", trd: "TRD-206", agtBags: 420, trdBags: 420, status: "Matched", src: "Direct Entry" },
    { billNo: "2187", date: "2026-10-25", agt: "AGT-102", trd: "TRD-207", agtBags: 150, trdBags: 150, status: "Matched", src: "Direct Entry" },
    { billNo: "B-221", date: "2026-10-26", agt: "AGT-103", trd: "TRD-205", agtBags: 290, trdBags: 290, status: "Matched", src: "Manual" },
    { billNo: "2191", date: "2026-10-27", agt: "AGT-104", trd: "TRD-203", agtBags: 440, trdBags: 440, status: "Matched", src: "Direct Entry" },
    { billNo: "B-226", date: "2026-10-28", agt: "AGT-105", trd: "TRD-201", agtBags: 220, trdBags: 220, status: "Matched", src: "Manual" },
    { billNo: "2196", date: "2026-10-29", agt: "AGT-106", trd: "TRD-204", agtBags: 370, trdBags: 370, status: "Matched", src: "Direct Entry" },
    { billNo: "2201", date: "2026-10-29", agt: "AGT-101", trd: "TRD-209", agtBags: 260, trdBags: 260, status: "Matched", src: "Direct Entry" },
    { billNo: "2205", date: "2026-10-30", agt: "AGT-102", trd: "TRD-205", agtBags: 330, trdBags: 330, status: "Matched", src: "Direct Entry" },
    { billNo: "B-231", date: "2026-10-30", agt: "AGT-103", trd: "TRD-206", agtBags: 175, trdBags: 175, status: "Matched", src: "Manual" },
    { billNo: "2210", date: "2026-10-30", agt: "AGT-104", trd: "TRD-207", agtBags: 290, trdBags: 290, status: "Matched", src: "Direct Entry" },
    { billNo: "B-235", date: "2026-10-30", agt: "AGT-105", trd: "TRD-208", agtBags: 205, trdBags: 205, status: "Matched", src: "Manual" }
  ];

  octData.forEach((item, idx) => {
    const agt = DEFAULT_AGENTS.find(a => a.id === item.agt);
    const trd = DEFAULT_TRADERS.find(t => t.id === item.trd);
    const finalBags = item.status === "Matched" ? item.agtBags : (item.finalBags || null);

    const auditTrail = [];
    if (item.agtBags !== null) {
      auditTrail.push({
        timestamp: `${item.date} 09:30 AM`,
        action: "Agent Entry",
        user: `${agt.firmName} (${item.src})`,
        details: `Entered ${item.agtBags} bags`
      });
    }
    if (item.trdBags !== null) {
      auditTrail.push({
        timestamp: `${item.date} 02:40 PM`,
        action: "Trader Entry",
        user: trd.firmName,
        details: `Entered ${item.trdBags} bags`
      });
    }
    if (item.status === "Mismatch") {
      auditTrail.push({
        timestamp: `${item.date} 02:41 PM`,
        action: "Mismatch Flagged",
        user: "System",
        details: `Difference flagged (Agent: ${item.agtBags} vs Trader: ${item.trdBags}). WhatsApp alert dispatched.`
      });
    }
    if (item.status === "Resolved") {
      auditTrail.push({
        timestamp: `${item.date} 04:15 PM`,
        action: "Resolved by Office",
        user: "Office Clerk (APMC)",
        details: `Set final count to ${item.finalBags} bags. Remark: ${item.resolutionRemark}`
      });
    }

    bills.push({
      id: `BIL-OCT-${String(idx + 1).padStart(3, "0")}`,
      billNo: item.billNo,
      date: item.date,
      month: "2026-10",
      agentId: agt.id,
      agentName: agt.firmName,
      traderId: trd.id,
      traderName: trd.firmName,
      agentBags: item.agtBags,
      traderBags: item.trdBags,
      finalBags: finalBags,
      ratePerBag: octRate,
      status: item.status,
      source: item.src,
      resolutionRemark: item.resolutionRemark || null,
      auditTrail: auditTrail
    });
  });

  return bills;
}

const DEFAULT_RATES = {
  agentRate: 0.50,
  traderRate: 2.00,
  history: [
    {
      id: "RH-103",
      category: "Trader",
      oldRate: 1.50,
      newRate: 2.00,
      effectiveDate: "2026-10-01",
      changedBy: "Secretary, APMC Managing Committee",
      changedAt: "25-09-2026 11:30 AM",
      notes: "Annual mandi market development cess revision approved in AGM."
    },
    {
      id: "RH-102",
      category: "Agent",
      oldRate: 0.40,
      newRate: 0.50,
      effectiveDate: "2026-10-01",
      changedBy: "Secretary, APMC Managing Committee",
      changedAt: "25-09-2026 11:30 AM",
      notes: "Yard maintenance and electronic weighing facilitation cess adjustment."
    },
    {
      id: "RH-101",
      category: "Trader",
      oldRate: 1.25,
      newRate: 1.50,
      effectiveDate: "2025-10-01",
      changedBy: "Secretary, APMC Managing Committee",
      changedAt: "20-09-2025 04:00 PM",
      notes: "Market cess revision for financial year 2025-26."
    }
  ]
};

const DEFAULT_PAYMENTS = [
  {
    id: "PMT-001",
    receiptNo: "RV-2026-0001",
    traderId: "TRD-201",
    traderName: "Shree Ganesh Traders",
    month: "2026-09",
    totalBags: 660,
    rateApplied: 1.50,
    totalFee: 990.00,
    amountPaid: 990.00,
    balance: 0.00,
    mode: "UPI",
    refNo: "UPI/628491029410",
    date: "2026-10-06",
    status: "Paid",
    remarks: "Settled in full via HDFC Bank UPI"
  },
  {
    id: "PMT-002",
    receiptNo: "RV-2026-0002",
    traderId: "TRD-202",
    traderName: "Balaji Cotton Co.",
    month: "2026-09",
    totalBags: 660,
    rateApplied: 1.50,
    totalFee: 990.00,
    amountPaid: 500.00,
    balance: 490.00,
    mode: "Cheque",
    refNo: "CHQ-004821 (SBI)",
    date: "2026-10-07",
    status: "Partially Paid",
    remarks: "Part payment deposited; balance due in next clearing"
  },
  {
    id: "PMT-003",
    receiptNo: "RV-2026-0003",
    traderId: "TRD-203",
    traderName: "Om Sai Agro Industries",
    month: "2026-09",
    totalBags: 520,
    rateApplied: 1.50,
    totalFee: 780.00,
    amountPaid: 780.00,
    balance: 0.00,
    mode: "Bank Transfer (NEFT)",
    refNo: "NEFT/AXIS/948201",
    date: "2026-10-08",
    status: "Paid",
    remarks: "Direct NEFT credit from Axis Bank current account"
  },
  {
    id: "PMT-004",
    receiptNo: "RV-2026-0004",
    traderId: "TRD-204",
    traderName: "Navrang Grains Corp",
    month: "2026-09",
    totalBags: 590,
    rateApplied: 1.50,
    totalFee: 885.00,
    amountPaid: 885.00,
    balance: 0.00,
    mode: "Cash",
    refNo: "CASH-REC-104",
    date: "2026-10-09",
    status: "Paid",
    remarks: "Cash counter deposit with official slip"
  }
];

const DEFAULT_NOTIFICATIONS = [
  {
    id: "NTF-001",
    timestamp: "30-10-2026 12:15 PM",
    type: "Mismatch",
    title: "Bill Mismatch Flagged (#2147)",
    message: "Discrepancy for Bill #2147: Annapurna Agro Agency entered 375 bags, Maruti Trading Co. entered 360 bags. WhatsApp alerts sent.",
    recipient: "Both Parties & Association"
  },
  {
    id: "NTF-002",
    timestamp: "30-10-2026 11:32 AM",
    type: "WhatsApp",
    title: "Batch Bills Ingested",
    message: "Background sync ingested 24 bills from billing gateway. 1 discrepancy flagged automatically.",
    recipient: "Association Admin"
  },
  {
    id: "NTF-003",
    timestamp: "29-10-2026 04:50 PM",
    type: "Approval",
    title: "New Agent Application",
    message: "Swastik Trading Co. (Vijaybhai Joshi) registered with license APMC/JAM/AGT-0677. Awaiting Committee verification.",
    recipient: "Association Admin"
  },
  {
    id: "NTF-004",
    timestamp: "26-10-2026 03:30 PM",
    type: "Payment",
    title: "Receipt Voucher Dispatched",
    message: "Receipt RV-2026-0003 for ₹780 dispatched to Om Sai Agro Industries on WhatsApp (+91 98982 33445).",
    recipient: "TRD-203"
  }
];

/**
 * AppState - Central State & LocalStorage Manager
 */
const AppState = {
  STORAGE_KEY: "APMC_MANDI_FEES_STATE_V2",

  data: null,

  init() {
    const raw = (typeof localStorage !== "undefined") ? localStorage.getItem(this.STORAGE_KEY) : null;
    if (raw) {
      try {
        this.data = JSON.parse(raw);
      } catch (e) {
        console.error("Failed to parse localStorage data, resetting to defaults", e);
        this.reset();
      }
    } else {
      this.reset();
    }
  },

  reset() {
    this.data = {
      currentRole: "association", // "association" | "agent" | "trader"
      currentUserId: "AGT-101",
      agents: DEFAULT_AGENTS,
      traders: DEFAULT_TRADERS,
      bills: generateInitialBills(),
      rates: DEFAULT_RATES,
      payments: DEFAULT_PAYMENTS,
      notifications: DEFAULT_NOTIFICATIONS,
      lockedMonths: ["2026-09"]
    };
    this.save();
  },

  save() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
      }
    } catch (e) {
      console.error("Error saving AppState to localStorage", e);
    }
  },

  // Role & Session
  getCurrentRole() {
    return this.data.currentRole || "association";
  },

  setCurrentRole(role, userId = null) {
    this.data.currentRole = role;
    if (userId) {
      this.data.currentUserId = userId;
    } else if (role === "agent") {
      this.data.currentUserId = this.data.currentUserId && this.data.currentUserId.startsWith("AGT") ? this.data.currentUserId : "AGT-101";
    } else if (role === "trader") {
      this.data.currentUserId = this.data.currentUserId && this.data.currentUserId.startsWith("TRD") ? this.data.currentUserId : "TRD-201";
    }
    this.save();
  },

  getCurrentUser() {
    const role = this.getCurrentRole();
    if (role === "association") {
      return { id: "ASSOC-ADMIN", name: "Vikrambhai Sharma", firmName: "APMC Mandi Association", role: "association", email: "secretary@apmc-unjha.in" };
    }
    if (role === "agent") {
      return this.data.agents.find(a => a.id === this.data.currentUserId) || this.data.agents[0];
    }
    if (role === "trader") {
      return this.data.traders.find(t => t.id === this.data.currentUserId) || this.data.traders[0];
    }
  },

  // Getters
  getAgents() { return this.data.agents; },
  getTraders() { return this.data.traders; },
  getBills() { return this.data.bills; },
  getRates() { return this.data.rates; },
  getPayments() { return this.data.payments; },
  getNotifications() { return this.data.notifications; },
  getLockedMonths() { return this.data.lockedMonths; },

  // Business Actions
  addBill(billInput) {
    const isLockedMonth = this.data.lockedMonths.includes(billInput.month);
    if (isLockedMonth) {
      throw new Error(`Month ${billInput.month} is already locked by the Association. New bills cannot be added.`);
    }

    const dup = this.data.bills.find(b =>
      b.agentId === billInput.agentId &&
      b.traderId === billInput.traderId &&
      b.billNo.toLowerCase() === billInput.billNo.trim().toLowerCase() &&
      b.date === billInput.date
    );
    if (dup) {
      throw new Error(`Bill #${billInput.billNo} already exists for this Agent and Trader on ${this.formatDate(billInput.date)}.`);
    }

    const agt = this.data.agents.find(a => a.id === billInput.agentId);
    const trd = this.data.traders.find(t => t.id === billInput.traderId);
    const effectiveRate = this.getEffectiveRate("Trader", billInput.date);

    let status = "Pending";
    let finalBags = null;

    if (billInput.agentBags !== null && billInput.traderBags !== null) {
      if (parseInt(billInput.agentBags) === parseInt(billInput.traderBags)) {
        status = "Matched";
        finalBags = parseInt(billInput.agentBags);
      } else {
        status = "Mismatch";
      }
    }

    const id = `BIL-${Date.now().toString().slice(-6)}`;
    const newBill = {
      id,
      billNo: billInput.billNo.trim().toUpperCase(),
      date: billInput.date,
      month: billInput.date.slice(0, 7),
      agentId: agt.id,
      agentName: agt.firmName,
      traderId: trd.id,
      traderName: trd.firmName,
      agentBags: billInput.agentBags !== null ? parseInt(billInput.agentBags) : null,
      traderBags: billInput.traderBags !== null ? parseInt(billInput.traderBags) : null,
      finalBags: finalBags,
      ratePerBag: effectiveRate,
      status: status,
      source: billInput.source || "Manual",
      auditTrail: [
        {
          timestamp: this.getTimestamp(),
          action: "Bill Recorded",
          user: billInput.enteredBy || "User",
          details: `Initial count logged (Agent: ${billInput.agentBags ?? '-'}, Trader: ${billInput.traderBags ?? '-'})`
        }
      ]
    };

    if (status === "Mismatch") {
      newBill.auditTrail.push({
        timestamp: this.getTimestamp(),
        action: "Mismatch Flagged",
        user: "System",
        details: "Discrepancy detected. WhatsApp notifications sent to both parties."
      });
      this.addNotification({
        type: "Mismatch",
        title: `Discrepancy on Bill #${newBill.billNo}`,
        message: `Difference on Bill #${newBill.billNo}: ${agt.firmName} (${newBill.agentBags} bags) vs ${trd.firmName} (${newBill.traderBags} bags).`,
        recipient: "Both Parties & Association"
      });
    }

    this.data.bills.unshift(newBill);
    this.save();
    return newBill;
  },

  updateBillPartyBags(billId, partyRole, bagCount, userFirm) {
    const bill = this.data.bills.find(b => b.id === billId);
    if (!bill) throw new Error("Bill not found.");
    if (bill.status === "Locked") {
      throw new Error("This bill belongs to a locked billing period and cannot be edited.");
    }

    const count = parseInt(bagCount);
    if (isNaN(count) || count <= 0) {
      throw new Error("Bag count must be a positive integer.");
    }

    const oldCount = partyRole === "agent" ? bill.agentBags : bill.traderBags;
    if (partyRole === "agent") {
      bill.agentBags = count;
    } else {
      bill.traderBags = count;
    }

    if (bill.agentBags !== null && bill.traderBags !== null) {
      if (bill.agentBags === bill.traderBags) {
        bill.status = "Matched";
        bill.finalBags = bill.agentBags;
      } else {
        bill.status = "Mismatch";
        bill.finalBags = null;
      }
    } else {
      bill.status = "Pending";
      bill.finalBags = null;
    }

    bill.auditTrail.push({
      timestamp: this.getTimestamp(),
      action: `${partyRole === "agent" ? "Agent" : "Trader"} Updated Bags`,
      user: userFirm,
      details: `Count revised from ${oldCount ?? '-'} to ${count}. Status: ${bill.status}.`
    });

    if (bill.status === "Mismatch") {
      this.addNotification({
        type: "Mismatch",
        title: `Discrepancy on Bill #${bill.billNo}`,
        message: `Mismatch on Bill #${bill.billNo}: ${bill.agentName} (${bill.agentBags}) vs ${bill.traderName} (${bill.traderBags}).`,
        recipient: "Both Parties & Association"
      });
    }

    this.save();
    return bill;
  },

  resolveBillByAssociation(billId, finalBags, remark, adminName = "Association Clerk") {
    const bill = this.data.bills.find(b => b.id === billId);
    if (!bill) throw new Error("Bill not found.");
    if (!remark || remark.trim().length < 5) {
      throw new Error("A clear mandatory remark (minimum 5 characters) is required.");
    }

    const bags = parseInt(finalBags);
    if (isNaN(bags) || bags <= 0) {
      throw new Error("Final bag count must be a positive integer.");
    }

    bill.finalBags = bags;
    bill.status = "Resolved";
    bill.resolutionRemark = remark.trim();
    bill.auditTrail.push({
      timestamp: this.getTimestamp(),
      action: "Resolved by Office",
      user: adminName,
      details: `Final bag count set to ${bags}. Remark: "${remark.trim()}"`
    });

    this.addNotification({
      type: "WhatsApp",
      title: `Discrepancy Resolved (#${bill.billNo})`,
      message: `Association resolved Bill #${bill.billNo} to ${bags} bags. Remark: ${remark.trim()}. WhatsApp sent to ${bill.agentName} and ${bill.traderName}.`,
      recipient: "Both Parties"
    });

    this.save();
    return bill;
  },

  approveUser(userId, role) {
    const list = role === "agent" ? this.data.agents : this.data.traders;
    const user = list.find(u => u.id === userId);
    if (user) {
      user.status = "Approved";
      this.addNotification({
        type: "Approval",
        title: `${role === "agent" ? "Agent" : "Trader"} Approved`,
        message: `${user.firmName} has been approved. Login link dispatched via WhatsApp.`,
        recipient: user.firmName
      });
      this.save();
    }
  },

  rejectUser(userId, role, reason) {
    const list = role === "agent" ? this.data.agents : this.data.traders;
    const user = list.find(u => u.id === userId);
    if (user) {
      user.status = "Rejected";
      user.rejectReason = reason || "Application rejected by committee.";
      this.addNotification({
        type: "Approval",
        title: `${role === "agent" ? "Agent" : "Trader"} Rejected`,
        message: `${user.firmName} was rejected. Reason: ${user.rejectReason}`,
        recipient: user.firmName
      });
      this.save();
    }
  },

  suspendUser(userId, role) {
    const list = role === "agent" ? this.data.agents : this.data.traders;
    const user = list.find(u => u.id === userId);
    if (user) {
      user.status = "Suspended";
      this.save();
    }
  },

  reactivateUser(userId, role) {
    const list = role === "agent" ? this.data.agents : this.data.traders;
    const user = list.find(u => u.id === userId);
    if (user) {
      user.status = "Approved";
      this.save();
    }
  },

  changeRate(category, newRate, effectiveDate, notes = "") {
    const rateVal = parseFloat(newRate);
    if (isNaN(rateVal) || rateVal <= 0) throw new Error("Rate must be greater than 0.");

    const oldRate = category === "Trader" ? this.data.rates.traderRate : this.data.rates.agentRate;
    if (category === "Trader") {
      this.data.rates.traderRate = rateVal;
    } else {
      this.data.rates.agentRate = rateVal;
    }

    const historyItem = {
      id: `RH-${String(this.data.rates.history.length + 101)}`,
      category,
      oldRate,
      newRate: rateVal,
      effectiveDate,
      changedBy: "Secretary, APMC Managing Committee",
      changedAt: this.getTimestamp(),
      notes: notes || "Rate schedule revision"
    };

    this.data.rates.history.unshift(historyItem);
    this.save();
    return historyItem;
  },

  getEffectiveRate(category, dateStr) {
    const relevant = this.data.rates.history.filter(h => h.category === category && h.effectiveDate <= dateStr);
    if (relevant.length > 0) {
      return relevant[0].newRate;
    }
    return category === "Trader" ? this.data.rates.traderRate : this.data.rates.agentRate;
  },

  recordPayment(payData) {
    const nextNum = this.data.payments.length + 1;
    const receiptNo = `RV-2026-${String(nextNum).padStart(4, "0")}`;

    const trd = this.data.traders.find(t => t.id === payData.traderId);
    const amount = parseFloat(payData.amount);
    const totalFee = parseFloat(payData.totalFee);
    const balance = Math.max(0, totalFee - amount);
    const status = balance === 0 ? "Paid" : "Partially Paid";

    const payment = {
      id: `PMT-${String(nextNum).padStart(3, "0")}`,
      receiptNo,
      traderId: trd.id,
      traderName: trd.firmName,
      month: payData.month,
      totalBags: payData.totalBags || 0,
      rateApplied: payData.rateApplied || this.data.rates.traderRate,
      totalFee: totalFee,
      amountPaid: amount,
      balance: balance,
      mode: payData.mode,
      refNo: payData.refNo || "-",
      date: payData.date || this.getTodayDate(),
      status: status,
      remarks: payData.remarks || ""
    };

    this.data.payments.unshift(payment);

    this.addNotification({
      type: "Payment",
      title: `Payment Received (${receiptNo})`,
      message: `₹${this.formatCurrency(amount)} received from ${trd.firmName} via ${payData.mode}. Receipt voucher ${receiptNo} sent on WhatsApp to +91 ${trd.mobile}.`,
      recipient: trd.firmName
    });

    this.save();
    return payment;
  },

  lockMonth(monthStr, adminName = "Secretary, APMC") {
    if (!this.data.lockedMonths.includes(monthStr)) {
      this.data.lockedMonths.push(monthStr);
    }
    this.data.bills.forEach(b => {
      if (b.month === monthStr) {
        b.status = "Locked";
        b.auditTrail.push({
          timestamp: this.getTimestamp(),
          action: "Month Locked",
          user: adminName,
          details: `Billing for ${monthStr} closed. Records locked.`
        });
      }
    });

    this.addNotification({
      type: "Approval",
      title: `Month Locked (${monthStr})`,
      message: `Association has finalized fees and locked billing for month ${monthStr}.`,
      recipient: "All Market Participants"
    });

    this.save();
  },

  addNotification(ntf) {
    this.data.notifications.unshift({
      id: `NTF-${Date.now().toString().slice(-4)}`,
      timestamp: this.getTimestamp(),
      ...ntf
    });
    this.save();
  },

  // Numerical & Date Formatters
  formatCurrency(val) {
    if (val === null || val === undefined || isNaN(val)) return "₹0.00";
    return "₹" + Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },

  formatNumber(val) {
    if (val === null || val === undefined || isNaN(val)) return "0";
    return Number(val).toLocaleString("en-IN");
  },

  formatDate(dateStr) {
    if (!dateStr) return "-";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateStr;
  },

  getTimestamp() {
    const now = new Date();
    const d = String(now.getDate()).padStart(2, "0");
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const y = now.getFullYear();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${d}-${m}-${y} ${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
  },

  getTodayDate() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
};

AppState.init();
