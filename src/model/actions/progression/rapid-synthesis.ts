import { ProgressAction } from '../progress-action';
import { Simulation } from '../../../simulation/simulation';
import { CraftingJob } from '../../crafting-job.enum';

export class RapidSynthesis extends ProgressAction {
  getLevelRequirement(): { job: CraftingJob; level: number } {
    return { job: CraftingJob.ANY, level: 9 };
  }

  _canBeUsed(simulationState: Simulation): boolean {
    return true;
  }

  getBaseCPCost(simulationState: Simulation): number {
    return 0;
  }

  getBaseDurabilityCost(simulationState: Simulation): number {
    return 10;
  }

  getBaseSuccessRate(simulationState: Simulation): number {
    return 50;
  }

  getIds(): number[] {
    return [100363, 100364, 100365, 100366, 100367, 100368, 100369, 100370];
  }

  getPotency(simulation: Simulation): number {
    if (simulation.crafterStats.level >= 63) {
      // Rapid Synthesis Mastery
      return 500;
    }
    return 250;
  }
}
