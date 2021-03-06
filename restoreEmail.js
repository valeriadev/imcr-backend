const request =  require("request-promise-native");

const dataFromEmail =""
const objToSend = {
  hospitals: "KAPLAN",
  ProcedureNumber: "1010",
  dateOfProcedure: "@@IMCR@@",
  yearOfBirth: "@@IMCR@@",
  Age: "@@IMCR@@",
  Gender: "@@IMCR@@",
  Height: "@@IMCR@@",
  Weight: "@@IMCR@@",
  BMI: "@@IMCR@@",
  BSA: "@@IMCR@@",
  notes1: "test 2",
  Hypertension: "@@IMCR@@",
  "DiabetesMellitus ": "@@IMCR@@",
  Dyslipidemia: "@@IMCR@@",
  Smoker: "@@IMCR@@",
  COPD: "@@IMCR@@",
  ObstructiveSleepApnea: "@@IMCR@@",
  Stroke: "@@IMCR@@",
  CoronaryArterydisease: "@@IMCR@@",
  PCI: "@@IMCR@@",
  MyocardialInfaction: "@@IMCR@@",
  CardiacSurgery: "@@IMCR@@",
  AtrialFibOrFlutter: "@@IMCR@@",
  Pacemaker: "@@IMCR@@",
  Oncologicdisease: "@@IMCR@@",
  PreviousMitraClip: "@@IMCR@@",
  procedureUrgency: "@@IMCR@@",
  AssistdeviceatthetimeofMitraclip: "@@IMCR@@",
  RecentCardiogenicShock: "@@IMCR@@",
  RecentAcuteMI: "@@IMCR@@",
  RecentPCI: "@@IMCR@@",
  RecentHFHospitaliztion: "@@IMCR@@",
  numberOfHfHospitalization: "@@IMCR@@",
  numberOfAllHospitalizationsNonElective: "@@IMCR@@",
  cardiomyopathy: "@@IMCR@@",
  mechanism: "@@IMCR@@",
  MrSeverity: "@@IMCR@@",
  mobility: "@@IMCR@@",
  peripheral_edema: "@@IMCR@@",
  fcNYHA: "@@IMCR@@",
  sixMWT: "@@IMCR@@",
  Antipleteles: "@@IMCR@@",
  Anticoagulants: "@@IMCR@@",
  "ACE-I_ARB": "@@IMCR@@",
  BetaBlockers: "@@IMCR@@",
  AntiMineralocorticoids: "@@IMCR@@",
  Digoxin: "@@IMCR@@",
  PulmonaryVasodilators: "@@IMCR@@",
  Fusid_per_os1: "@@IMCR@@",
  fusidPerOsDosage: "@@IMCR@@",
  Fusid_IV1: "@@IMCR@@",
  euroscore2: "@@IMCR@@",
  sts_score: "@@IMCR@@",
  hemoglobin_g_dL: "@@IMCR@@",
  hemoglobin_mmol_L: "@@IMCR@@",
  Creatinine_mg_dL: "@@IMCR@@",
  Creatinine_micromol_l: "@@IMCR@@",
  GFR: "@@IMCR@@",
  albumin: "@@IMCR@@",
  BNP: "@@IMCR@@",
  ProBNP: "@@IMCR@@",
  notes22: "@@IMCR@@",
  echoDate: "@@IMCR@@",
  lvedd: "@@IMCR@@",
  lvesd: "@@IMCR@@",
  ivs: "@@IMCR@@",
  pw: "@@IMCR@@",
  simpsonEF: "@@IMCR@@",
  CategoricalLVfunction: "@@IMCR@@",
  lvMass: "@@IMCR@@",
  MitralAnulusCacification: "@@IMCR@@",
  meanGradient: "@@IMCR@@",
  MrSeverityColor: "@@IMCR@@",
  typeOfMR: "@@IMCR@@",
  EffectiveRegurgitantOrificeArea: "@@IMCR@@",
  mRVolume: "@@IMCR@@",
  AorticStenosisPresent: "@@IMCR@@",
  asSeverity: "@@IMCR@@",
  avMeanGradient: "@@IMCR@@",
  mRVolume1: "@@IMCR@@",
  TricuspidRegurgitationSeverity: "@@IMCR@@",
  SevereTRsubClassification: "@@IMCR@@",
  TRsystolicGradient: "@@IMCR@@",
  EstimatedPApressure: "@@IMCR@@",
  DiastolicDysfunctionGrade: "@@IMCR@@",
  RightVentricularDysfunctionGrade: "@@IMCR@@",
  TAPSE: "@@IMCR@@",
  RightVentricularSizeGrade: "@@IMCR@@",
  IVCdiameter1: "@@IMCR@@",
  LeftAtrialDiameter1: "@@IMCR@@",
  LeftAtrialArea1: "@@IMCR@@",
  LeftAtriumVolume1: "@@IMCR@@",
  ASDPresent: "@@IMCR@@",
  Shunt1: "@@IMCR@@",
  notes3: "@@IMCR@@",
  PostProcedureEchoDate: "@@IMCR@@",
  PostProcedureLvDysfunction: "@@IMCR@@",
  PostProcedureLVEF: "@@IMCR@@",
  "Post-precedure MR": "@@IMCR@@",
  PostProcedureMSMeanGradientMmHg: "@@IMCR@@",
  TrSeverityColor: "@@IMCR@@",
  PostProcedureEstimatedRvPressure: "@@IMCR@@",
  RVfunction: "@@IMCR@@",
  RVdiameter: "@@IMCR@@",
  "Post-procedure-ASD-PFO": "@@IMCR@@",
  Shunt2: "@@IMCR@@",
  ASD_PFOseverity: "@@IMCR@@",
  diastolicDysfunction: "@@IMCR@@",
  IVCdiameter: "@@IMCR@@",
  LeftAtriumVolume: "@@IMCR@@",
  notes4: "@@IMCR@@",
  echoDateTEE: "@@IMCR@@",
  MrSeverity_TEE: "@@IMCR@@",
  MVMeanGradient: "@@IMCR@@",
  MVPosteriorLeaflet: "@@IMCR@@",
  MVTethering: "@@IMCR@@",
  MVFlail: "@@IMCR@@",
  MVProlapse: "@@IMCR@@",
  MRmechanism: "@@IMCR@@",
  PulmonaryVienSystolicFlow: "@@IMCR@@",
  TricuspidRegurgitaitonSeverity: "@@IMCR@@",
  LaSmoke: "@@IMCR@@",
  AtrialSeptalDefect: "@@IMCR@@",
  Shunt3: "@@IMCR@@",
  MrSeverityTEE: "@@IMCR@@",
  MeanMVgradient: "@@IMCR@@",
  LaChomogenousContast: "@@IMCR@@",
  "ASD-PFO": "@@IMCR@@",
  ASD_PFOsize: "@@IMCR@@",
  Shunt4: "@@IMCR@@",
  VenaContracta: "@@IMCR@@",
  notes: "@@IMCR@@",
  NumberOfVesselsInvolved: "@@IMCR@@",
  LeftMainStenosis: "@@IMCR@@",
  LADStenosis: "@@IMCR@@",
  LCXStenosis: "@@IMCR@@",
  RCAStenosis: "@@IMCR@@",
  PastCABG: "@@IMCR@@",
  PCWP: "@@IMCR@@",
  vWave: "@@IMCR@@",
  PAPressures: "@@IMCR@@",
  notes7: "@@IMCR@@",
  VascularAccessVein: "@@IMCR@@",
  NumbersOfClipsImplanted: "@@IMCR@@",
  TypeOfClip: "@@IMCR@@",
  AbortionOfProcedure: "@@IMCR@@",
  ConcomitantProceduresPreformed: "@@IMCR@@",
  notes8: "@@IMCR@@",
  PreProcedureSystolicBloodPressure: "@@IMCR@@",
  PreProcedureDiastolicBloodPressure: "@@IMCR@@",
  preProcedureVWave: "@@IMCR@@",
  PostProcedureSystolicBloodPressure: "@@IMCR@@",
  PostProcedureDiastolicBloodPressure: "@@IMCR@@",
  postProcedureVWave: "@@IMCR@@",
  PeriProcedureComplications: "@@IMCR@@",
  DescriptionOfComplications: "@@IMCR@@",
  OtherCardiacProcedures: "@@IMCR@@",
  DetailsOtherCardiacProcedures: "@@IMCR@@",
  DischargeDate: "@@IMCR@@",
  DischargeStatus: "@@IMCR@@",
  DaysInICUOrCCU: "@@IMCR@@",
  PostClipStayInCCUICUDays: "@@IMCR@@",
  TotalLengthOfHospitalizationPostClipDays: "@@IMCR@@",
  PackedCells: "@@IMCR@@",
  ProlongedIntubation: "@@IMCR@@",
  HemodynamicSupportAfterProcedure: "@@IMCR@@",
  ComplicationsNote: "@@IMCR@@",
  Antiplatelets: "@@IMCR@@",
  Anticoagulants_2: "@@IMCR@@",
  "ACE-I-ARB_2": "@@IMCR@@",
  Betablockers_2: "@@IMCR@@",
  Digoxin_2: "@@IMCR@@",
  Fusidperos_2: "@@IMCR@@",
  FusidPerOsDosagePost: "@@IMCR@@",
  IV_Fusid_2: "@@IMCR@@",
  notes9: "@@IMCR@@",
  Patient_Alive: "@@IMCR@@",
  "Mortality date": "@@IMCR@@",
  "Last known FU": "@@IMCR@@",
  Procedural_mortality: "@@IMCR@@",
  "Post-procedure-but-in-hospital-cardiovascular-mortality": "@@IMCR@@",
  "Post-procedure-but-in-hospital-non-cardiovascular-mortality": "@@IMCR@@",
  "Out-of-hospital-Cardiovascular-mortality": "@@IMCR@@",
  "Out-of-hospital-non-cardiovascular-mortality": "@@IMCR@@",
  "Out-of-hospital-Unknown-mortality": "@@IMCR@@",
  notes10: "@@IMCR@@",
  Patient_Alive_clinical_follow_30: "@@IMCR@@",
  "Last known FU_clinical_follow_30": "@@IMCR@@",
  mobility_clinical_follow_30: "@@IMCR@@",
  peripheral_edema_clinical_follow_30: "@@IMCR@@",
  fcNYHA_clinical_follow_30: "@@IMCR@@",
  sixMWT_clinical_follow_30: "@@IMCR@@",
  Weight_clinical_follow_30: "@@IMCR@@",
  Fusid_per_os1_clinical_follow_30: "@@IMCR@@",
  fusidPerOsDosage_clinical_follow_30: "@@IMCR@@",
  Fusid_IV1_clinical_follow_30: "@@IMCR@@",
  Heart_Failure_Hospitalization_clinical_follow_30: "@@IMCR@@",
  Heart_Failure_Hospitalization_Date_clinical_follow_30: "@@IMCR@@",
  hemoglobin_g_dL_clinical_follow_30: "@@IMCR@@",
  hemoglobin_mmol_L_clinical_follow_30: "@@IMCR@@",
  Creatinine_mg_dL_clinical_follow_30: "@@IMCR@@",
  Creatinine_micromol_l_clinical_follow_30: "@@IMCR@@",
  GFR_clinical_follow_30: "@@IMCR@@",
  albumin_clinical_follow_30: "@@IMCR@@",
  BNP_clinical_follow_30: "@@IMCR@@",
  ProBNP_clinical_follow_30: "@@IMCR@@",
  notes22_clinical_follow_30: "@@IMCR@@",
  echoDate_echo_follow_up_30: "@@IMCR@@",
  lvedd_echo_follow_up_30: "@@IMCR@@",
  lvesd_echo_follow_up_30: "@@IMCR@@",
  ivs_echo_follow_up_30: "@@IMCR@@",
  pw_echo_follow_up_30: "@@IMCR@@",
  simpsonEF_echo_follow_up_30: "@@IMCR@@",
  CategoricalLVfunction_echo_follow_up_30: "@@IMCR@@",
  lvMass_echo_follow_up_30: "@@IMCR@@",
  MitralAnulusCacification_echo_follow_up_30: "@@IMCR@@",
  meanGradient_echo_follow_up_30: "@@IMCR@@",
  MrSeverityColor_echo_follow_up_30: "@@IMCR@@",
  typeOfMR_echo_follow_up_30: "@@IMCR@@",
  EffectiveRegurgitantOrificeArea_echo_follow_up_30: "@@IMCR@@",
  mRVolume_echo_follow_up_30: "@@IMCR@@",
  AorticStenosisPresent_echo_follow_up_30: "@@IMCR@@",
  asSeverity_echo_follow_up_30: "@@IMCR@@",
  avMeanGradient_echo_follow_up_30: "@@IMCR@@",
  mRVolume1_echo_follow_up_30: "@@IMCR@@",
  TricuspidRegurgitationSeverity_echo_follow_up_30: "@@IMCR@@",
  SevereTRsubClassification_echo_follow_up_30: "@@IMCR@@",
  TRsystolicGradient_echo_follow_up_30: "@@IMCR@@",
  EstimatedPApressure_echo_follow_up_30: "@@IMCR@@",
  DiastolicDysfunctionGrade_echo_follow_up_30: "@@IMCR@@",
  RightVentricularDysfunctionGrade_echo_follow_up_30: "@@IMCR@@",
  TAPSE_echo_follow_up_30: "@@IMCR@@",
  RightVentricularSizeGrade_echo_follow_up_30: "@@IMCR@@",
  IVCdiameter1_echo_follow_up_30: "@@IMCR@@",
  LeftAtrialDiameter1_echo_follow_up_30: "@@IMCR@@",
  LeftAtrialArea1_echo_follow_up_30: "@@IMCR@@",
  LeftAtriumVolume1_echo_follow_up_30: "@@IMCR@@",
  ASDPresent_echo_follow_up_30: "@@IMCR@@",
  Shunt1_echo_follow_up_30: "@@IMCR@@",
  notes3_echo_follow_up_30: "@@IMCR@@",
  PostProcedureEchoDate_echo_follow_up_30: "@@IMCR@@",
  PostProcedureLvDysfunction_echo_follow_up_30: "@@IMCR@@",
  PostProcedureLVEF_echo_follow_up_30: "@@IMCR@@",
  "Post-precedureMR_echo_follow_up_30": "@@IMCR@@",
  PostProcedureMSMeanGradientMmHg_echo_follow_up_30: "@@IMCR@@",
  TrSeverityColor_echo_follow_up_30: "@@IMCR@@",
  PostProcedureEstimatedRvPressure_echo_follow_up_30: "@@IMCR@@",
  RVfunction_echo_follow_up_30: "@@IMCR@@",
  RVdiameter_echo_follow_up_30: "@@IMCR@@",
  "Post-procedure-ASD-PFO_echo_follow_up_30": "@@IMCR@@",
  Shunt2_echo_follow_up_30: "@@IMCR@@",
  ASD_PFOseverity_echo_follow_up_30: "@@IMCR@@",
  diastolicDysfunction_echo_follow_up_30: "@@IMCR@@",
  IVCdiameter_echo_follow_up_30: "@@IMCR@@",
  LeftAtriumVolume_echo_follow_up_30: "@@IMCR@@",
  Patient_Alive_clinical_follow_365: "@@IMCR@@",
  "Last known FU_clinical_follow_365": "@@IMCR@@",
  mobility_clinical_follow_365: "@@IMCR@@",
  peripheral_edema_clinical_follow_365: "@@IMCR@@",
  fcNYHA_clinical_follow_365: "@@IMCR@@",
  sixMWT_clinical_follow_365: "@@IMCR@@",
  Weight_clinical_follow_365: "@@IMCR@@",
  Fusid_per_os1_clinical_follow_365: "@@IMCR@@",
  fusidPerOsDosage_clinical_follow_365: "@@IMCR@@",
  Fusid_IV1_clinical_follow_365: "@@IMCR@@",
  Heart_Failure_Hospitalization_clinical_follow_365: "@@IMCR@@",
  Heart_Failure_Hospitalization_Date_clinical_follow_365: "@@IMCR@@",
  hemoglobin_g_dL_clinical_follow_365: "@@IMCR@@",
  hemoglobin_mmol_L_clinical_follow_365: "@@IMCR@@",
  Creatinine_mg_dL_clinical_follow_365: "@@IMCR@@",
  Creatinine_micromol_l_clinical_follow_365: "@@IMCR@@",
  GFR_clinical_follow_365: "@@IMCR@@",
  albumin_clinical_follow_365: "@@IMCR@@",
  BNP_clinical_follow_365: "@@IMCR@@",
  ProBNP_clinical_follow_365: "@@IMCR@@",
  notes22_clinical_follow_365: "@@IMCR@@",
  echoDate_echo_follow_up_365: "@@IMCR@@",
  lvedd_echo_follow_up_365: "@@IMCR@@",
  lvesd_echo_follow_up_365: "@@IMCR@@",
  ivs_echo_follow_up_365: "@@IMCR@@",
  pw_echo_follow_up_365: "@@IMCR@@",
  simpsonEF_echo_follow_up_365: "@@IMCR@@",
  CategoricalLVfunction_echo_follow_up_365: "@@IMCR@@",
  lvMass_echo_follow_up_365: "@@IMCR@@",
  MitralAnulusCacification_echo_follow_up_365: "@@IMCR@@",
  meanGradient_echo_follow_up_365: "@@IMCR@@",
  MrSeverityColor_echo_follow_up_365: "@@IMCR@@",
  typeOfMR_echo_follow_up_365: "@@IMCR@@",
  EffectiveRegurgitantOrificeArea_echo_follow_up_365: "@@IMCR@@",
  mRVolume_echo_follow_up_365: "@@IMCR@@",
  AorticStenosisPresent_echo_follow_up_365: "@@IMCR@@",
  asSeverity_echo_follow_up_365: "@@IMCR@@",
  avMeanGradient_echo_follow_up_365: "@@IMCR@@",
  mRVolume1_echo_follow_up_365: "@@IMCR@@",
  TricuspidRegurgitationSeverity_echo_follow_up_365: "@@IMCR@@",
  SevereTRsubClassification_echo_follow_up_365: "@@IMCR@@",
  TRsystolicGradient_echo_follow_up_365: "@@IMCR@@",
  EstimatedPApressure_echo_follow_up_365: "@@IMCR@@",
  DiastolicDysfunctionGrade_echo_follow_up_365: "@@IMCR@@",
  RightVentricularDysfunctionGrade_echo_follow_up_365: "@@IMCR@@",
  TAPSE_echo_follow_up_365: "@@IMCR@@",
  RightVentricularSizeGrade_echo_follow_up_365: "@@IMCR@@",
  IVCdiameter1_echo_follow_up_365: "@@IMCR@@",
  LeftAtrialDiameter1_echo_follow_up_365: "@@IMCR@@",
  LeftAtrialArea1_echo_follow_up_365: "@@IMCR@@",
  LeftAtriumVolume1_echo_follow_up_365: "@@IMCR@@",
  ASDPresent_echo_follow_up_365: "@@IMCR@@",
  Shunt1_echo_follow_up_365: "@@IMCR@@",
  notes3_echo_follow_up_365: "@@IMCR@@",
  PostProcedureEchoDate_echo_follow_up_365: "@@IMCR@@",
  PostProcedureLvDysfunction_echo_follow_up_365: "@@IMCR@@",
  PostProcedureLVEF_echo_follow_up_365: "@@IMCR@@",
  "Post-precedureMR_echo_follow_up_365": "@@IMCR@@",
  PostProcedureMSMeanGradientMmHg_echo_follow_up_365: "@@IMCR@@",
  TrSeverityColor_echo_follow_up_365: "@@IMCR@@",
  PostProcedureEstimatedRvPressure_echo_follow_up_365: "@@IMCR@@",
  RVfunction_echo_follow_up_365: "@@IMCR@@",
  RVdiameter_echo_follow_up_365: "@@IMCR@@",
  "Post-procedure-ASD-PFO_echo_follow_up_365": "@@IMCR@@",
  Shunt2_echo_follow_up_365: "@@IMCR@@",
  ASD_PFOseverity_echo_follow_up_365: "@@IMCR@@",
  diastolicDysfunction_echo_follow_up_365: "@@IMCR@@",
  IVCdiameter_echo_follow_up_365: "@@IMCR@@",
  LeftAtriumVolume_echo_follow_up_365: "@@IMCR@@",
  Patient_Alive_clinical_follow_2_years: "@@IMCR@@",
  "Last known FU_clinical_follow_2_years": "@@IMCR@@",
  mobility_clinical_follow_2_years: "@@IMCR@@",
  peripheral_edema_clinical_follow_2_years: "@@IMCR@@",
  fcNYHA_clinical_follow_2_years: "@@IMCR@@",
  sixMWT_clinical_follow_2_years: "@@IMCR@@",
  Weight_clinical_follow_2_years: "@@IMCR@@",
  Fusid_per_os1_clinical_follow_2_years: "@@IMCR@@",
  fusidPerOsDosage_clinical_follow_2_years: "@@IMCR@@",
  Fusid_IV1_clinical_follow_2_years: "@@IMCR@@",
  Heart_Failure_Hospitalization_clinical_follow_2_years: "@@IMCR@@",
  Heart_Failure_Hospitalization_Date_clinical_follow_2_years: "@@IMCR@@",
  hemoglobin_g_dL_clinical_follow_2_years: "@@IMCR@@",
  hemoglobin_mmol_L_clinical_follow_2_years: "@@IMCR@@",
  Creatinine_mg_dL_clinical_follow_2_years: "@@IMCR@@",
  Creatinine_micromol_l_clinical_follow_2_years: "@@IMCR@@",
  GFR_clinical_follow_2_years: "@@IMCR@@",
  albumin_clinical_follow_2_years: "@@IMCR@@",
  BNP_clinical_follow_2_years: "@@IMCR@@",
  ProBNP_clinical_follow_2_years: "@@IMCR@@",
  notes22_clinical_follow_2_years: "@@IMCR@@",
  echoDate_echo_follow_up_2_year: "@@IMCR@@",
  lvedd_echo_follow_up_2_year: "@@IMCR@@",
  lvesd_echo_follow_up_2_year: "@@IMCR@@",
  ivs_echo_follow_up_2_year: "@@IMCR@@",
  pw_echo_follow_up_2_year: "@@IMCR@@",
  simpsonEF_echo_follow_up_2_year: "@@IMCR@@",
  CategoricalLVfunction_echo_follow_up_2_year: "@@IMCR@@",
  lvMass_echo_follow_up_2_year: "@@IMCR@@",
  MitralAnulusCacification_echo_follow_up_2_year: "@@IMCR@@",
  meanGradient_echo_follow_up_2_year: "@@IMCR@@",
  MrSeverityColor_echo_follow_up_2_year: "@@IMCR@@",
  typeOfMR_echo_follow_up_2_year: "@@IMCR@@",
  EffectiveRegurgitantOrificeArea_echo_follow_up_2_year: "@@IMCR@@",
  mRVolume_echo_follow_up_2_year: "@@IMCR@@",
  AorticStenosisPresent_echo_follow_up_2_year: "@@IMCR@@",
  asSeverity_echo_follow_up_2_year: "@@IMCR@@",
  avMeanGradient_echo_follow_up_2_year: "@@IMCR@@",
  mRVolume1_echo_follow_up_2_year: "@@IMCR@@",
  TricuspidRegurgitationSeverity_echo_follow_up_2_year: "@@IMCR@@",
  SevereTRsubClassification_echo_follow_up_2_year: "@@IMCR@@",
  TRsystolicGradient_echo_follow_up_2_year: "@@IMCR@@",
  EstimatedPApressure_echo_follow_up_2_year: "@@IMCR@@",
  DiastolicDysfunctionGrade_echo_follow_up_2_year: "@@IMCR@@",
  RightVentricularDysfunctionGrade_echo_follow_up_2_year: "@@IMCR@@",
  TAPSE_echo_follow_up_2_year: "@@IMCR@@",
  RightVentricularSizeGrade_echo_follow_up_2_year: "@@IMCR@@",
  IVCdiameter1_echo_follow_up_2_year: "@@IMCR@@",
  LeftAtrialDiameter1_echo_follow_up_2_year: "@@IMCR@@",
  LeftAtrialArea1_echo_follow_up_2_year: "@@IMCR@@",
  LeftAtriumVolume1_echo_follow_up_2_year: "@@IMCR@@",
  ASDPresent_echo_follow_up_2_year: "@@IMCR@@",
  Shunt1_echo_follow_up_2_year: "@@IMCR@@",
  notes3_echo_follow_up_2_year: "@@IMCR@@",
  PostProcedureEchoDate_echo_follow_up_2_year: "@@IMCR@@",
  PostProcedureLvDysfunction_echo_follow_up_2_year: "@@IMCR@@",
  PostProcedureLVEF_echo_follow_up_2_year: "@@IMCR@@",
  "Post-precedureMR_echo_follow_up_2_year": "@@IMCR@@",
  PostProcedureMSMeanGradientMmHg_echo_follow_up_2_year: "@@IMCR@@",
  TrSeverityColor_echo_follow_up_2_year: "@@IMCR@@",
  PostProcedureEstimatedRvPressure_echo_follow_up_2_year: "@@IMCR@@",
  RVfunction_echo_follow_up_2_year: "@@IMCR@@",
  RVdiameter_echo_follow_up_2_year: "@@IMCR@@",
  "Post-procedure-ASD-PFO_echo_follow_up_2_year": "@@IMCR@@",
  Shunt2_echo_follow_up_2_year: "@@IMCR@@",
  ASD_PFOseverity_echo_follow_up_2_year: "@@IMCR@@",
  diastolicDysfunction_echo_follow_up_2_year: "@@IMCR@@",
  IVCdiameter_echo_follow_up_2_year: "@@IMCR@@",
  LeftAtriumVolume_echo_follow_up_2_year: "@@IMCR@@",
  undefined: "@@IMCR@@"
};


const values = dataFromEmail.split(',');
const keys = Object.keys(objToSend);

keys.forEach((key,i)=>{
    objToSend[key] = values[i] || "@@IMCR@@"
})

console.log(JSON.stringify(objToSend))


request.post(
  "http://api.imcr.info/record?token=c441a498-ce56-4d35-83a0-2cb712b5c832",
  {
    json: objToSend
  }
);
