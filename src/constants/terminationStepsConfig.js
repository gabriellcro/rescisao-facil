import {
  ACCRUED_VACATION_STEP,
  FGTS_STEP,
  PRIOR_NOTICE_STEP,
  PROPORTIONAL_VACATION_STEP,
  SALARY_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  LAST_UNEMPLOYMENT_BENEFIT_STEP,
  CONTRACT_TERMINATED_EARLY_STEP,
} from "@/constants/stepsConfig";

const resignation_steps = [
  SALARY_STEP,
  PRIOR_NOTICE_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
];

const dismissal_without_cause_steps = [
  SALARY_STEP,
  PRIOR_NOTICE_STEP,
  FGTS_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
  LAST_UNEMPLOYMENT_BENEFIT_STEP,
];

const dismissal_with_cause_steps = [SALARY_STEP, ACCRUED_VACATION_STEP];

const indirect_termination_steps = [
  SALARY_STEP,
  PRIOR_NOTICE_STEP,
  FGTS_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
  LAST_UNEMPLOYMENT_BENEFIT_STEP,
];

const fixed_term_end_steps = [
  SALARY_STEP,
  FGTS_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
  CONTRACT_TERMINATED_EARLY_STEP,
];

const mutual_agreement_steps = [
  SALARY_STEP,
  PRIOR_NOTICE_STEP,
  FGTS_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
];

const trial_period_end_dismissed_steps = [
  SALARY_STEP,
  FGTS_STEP,
  WORK_PERIOD_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
];

const trial_period_end_resignation_steps = [
  SALARY_STEP,
  WORK_PERIOD_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
];

export {
  resignation_steps,
  dismissal_without_cause_steps,
  dismissal_with_cause_steps,
  indirect_termination_steps,
  fixed_term_end_steps,
  mutual_agreement_steps,
  trial_period_end_dismissed_steps,
  trial_period_end_resignation_steps,
};
