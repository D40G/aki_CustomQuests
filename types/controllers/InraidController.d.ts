import { PlayerScavGenerator } from "../generators/PlayerScavGenerator";
import { HealthHelper } from "../helpers/HealthHelper";
import { InRaidHelper } from "../helpers/InRaidHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { QuestHelper } from "../helpers/QuestHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IRegisterPlayerRequestData } from "../models/eft/inRaid/IRegisterPlayerRequestData";
import { ISaveProgressRequestData } from "../models/eft/inRaid/ISaveProgressRequestData";
import { IInRaidConfig } from "../models/spt/config/IInRaidConfig";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { InsuranceService } from "../services/InsuranceService";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class InraidController {
    protected saveServer: SaveServer;
    protected jsonUtil: JsonUtil;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected questHelper: QuestHelper;
    protected itemHelper: ItemHelper;
    protected profileHelper: ProfileHelper;
    protected playerScavGenerator: PlayerScavGenerator;
    protected healthHelper: HealthHelper;
    protected traderHelper: TraderHelper;
    protected insuranceService: InsuranceService;
    protected inRaidHelper: InRaidHelper;
    protected configServer: ConfigServer;
    protected inraidConfig: IInRaidConfig;
    constructor(saveServer: SaveServer, jsonUtil: JsonUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, questHelper: QuestHelper, itemHelper: ItemHelper, profileHelper: ProfileHelper, playerScavGenerator: PlayerScavGenerator, healthHelper: HealthHelper, traderHelper: TraderHelper, insuranceService: InsuranceService, inRaidHelper: InRaidHelper, configServer: ConfigServer);
    addPlayer(sessionID: string, info: IRegisterPlayerRequestData): void;
    saveProgress(offraidData: ISaveProgressRequestData, sessionID: string): void;
    /**
     * Mark inventory items as FiR if player survived raid, otherwise remove FiR from them
     * @param offraidData Save Progress Request
     * @param pmcData player profile
     * @param isPlayerScav Was the player a pScav
     */
    private markOrRemoveFoundInRaidItems;
    private handlePostRaidPlayerScavProcess;
    private handlePostRaidPlayerScavKarmaChanges;
}
