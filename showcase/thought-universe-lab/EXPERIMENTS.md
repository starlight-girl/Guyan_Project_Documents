# Experiments

- A Semantic only：Resonance、Noise、Rotation 设为 0，观察是否退化为普通语义聚集。
- B Semantic + Physics：保留边界、排斥、阻尼与噪声，比较轨迹。
- C Full resonance：默认参数运行并记录稳定关系。
- D Perturbation：C 稳定后投入“声桩力穹”，比较前后邻域与 coupling。

同一 Seed 可 Replay；Parallel Universe 使用相同思想与参数、不同 Seed。JSON 导出包含 Seed、参数、思想、耦合和快照。
